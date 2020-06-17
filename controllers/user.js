const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/User");
const validator = require("validator");

module.exports = {
    create,
    authenticate,
    verifyToken,
    getAll,
    getById,
    update,
    deleteUser
};

async function create(userParam) {  //register

    let { name, email, password } = userParam;

    let user = await UserModel.findOne(
        { email: email }
    );

    if(!validator.isLength(name, 3, 20)) {
        throw "Username must have at least min 3characters and max 8 characters";
    }
    if(!validator.isAlpha(name,['en-US'])) {
        throw "Username have must contain only alphabet character";
    }

    if(user) {
        throw 'Email "' + email + '" is already taken';
    }

    const emailRegex = /([a-zA-Z0-9]+)([.{1}])?([a-zA-Z0-9]+)@gmail([.])com/g;
    if(!validator.isEmail(email) || !validator.matches(email, emailRegex)) {
        throw "Email is Invalid and support only @gmail.com"
    }

    const noSpace = /^\S+$/g;  //remove space within password
    if(!validator.isLength(password, 8, 20) || !validator.matches(password, noSpace)) {
        throw 'password "' + password + '" is invalided';
    }

    user = new UserModel(userParam);

    //encrypt password
    if(password) {
        const salt = await bcrypt.genSalt(10);
        user.password = bcrypt.hashSync(password, salt);
    }

    //save user into Collection
    await user.save();

    //returning token after register successfully
    const payload = {
        user: { id: user.id  },
    };

    const signOption = {
        expiresIn: "1min",
        algorithm: "HS384"
    };

    return jwt.sign(payload, config.get("jwtSecret"), signOption);
}

async function authenticate({ email, password }) {  //Login

    const user = await UserModel.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);

    if(user && isMatch) {
        const { ...userWithoutHash } = user.toObject();
        return {  ...userWithoutHash };
    }
}

async function verifyToken(req) {

    let user = await UserModel.findById(req.user.id).select('-password');
    return { user };
}

async function getAll() {   //get all user

    return await UserModel.find().select('-hash');
}

async function getById(id) { //need to be fixed!!!

    return await UserModel.findById(id).select('-hash');
}

async function update(id, userParam) {
    const user = await UserModel.findById(id);
    //validate if new updated info has
    if(!user) {
        throw "Error, User Not Found";
    }

    if(user.name !== userParam.name &&
       await UserModel.findOne({ name: userParam.name })) {

        throw "Username is already taken";
    }

    if(userParam.password) {
        const salt = await bcrypt.genSalt(10);
        userParam.hash = bcrypt.hashSync(userParam.password, salt);
    }

    Object.assign(user, userParam);
    await user.save();
}

async function deleteUser(id) {

    let user = await UserModel.findByIdAndRemove(id);
    if(!user) {
        throw "This User does not existed";
    }
    return user;
}
