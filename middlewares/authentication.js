const { validateToken } = require("../services/authentication");

function checkForAuthenticationCookie(cookieName){
    return (req, res, next) => {
        const tokencookievalue = req.cookies[cookieName];

        if(!tokencookievalue){
            return next();
        }

        try {
            const userPayLoad = validateToken(tokencookievalue);
            req.user = userPayLoad
        } catch (error) {
            
        }

        return next()

    }
}

module.exports = {
    checkForAuthenticationCookie
}