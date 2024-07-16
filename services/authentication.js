const JWT = require('jsonwebtoken');

const secret = 'ilovemyindia';

function createTokenForUser(user){
    const payload = {
        id: user._id,
        email: user.email,
        profilePhoto: user.profilePhoto,
        role: user.role
    }

    const token = JWT.sign(payload, secret);

    return token;
}

function validateToken(token){
    const payload = JWT.verify(token, secret);
    return payload;
}

module.exports = {
    createTokenForUser,
    validateToken
}
