const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = (req, res, next) => {

    //getting token from header
    const token = req.header("x-auth-token");
    //checking if not token
    if(!token) {
        return res.status(401).json({
            msg: "No Token, Authentication has denied"
        });
    }
    try {
        //translate user's token
        const decoded = jwt.verify(token, config.get("jwtSecret"));
        req.user = decoded.user;
        next();
    } catch (err) {

        res.status(401).json({
            msg: 'Token is invalided'
        });

    }
};