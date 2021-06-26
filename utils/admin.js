const isAdmin = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (req.user && req.user.type === "Administrator") {
        next();
    } else {
        res.status(403).json({ "message": "access denied" });
    }
};

module.exports = isAdmin;