const authorizationMiddleware = (req,res,next) => {
    if (!req.headers || !req.headers['authorization']) {
        res.statusCode = 403;
        res.json({ error: "Missing JWT token from the 'Authorization' header" });
    } else {
        next();
    }
};

module.exports = authorizationMiddleware;
