const expressJwt = require("express-jwt");
const config = require("config");
const userService = require("../routes/user");

module.exports = jwt;

function jwt() {
    const secret = config.get("jwtSecret");
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            //public routes that dont require authentication
            '/users/authenticate',
            '/users/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    //revoke token if user no longer exists
    if(!user) {
        return done(null, true);
    }
    done();
}