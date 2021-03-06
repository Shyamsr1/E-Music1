const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    console.log("Inside checkAuth try");
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
    console.log(decodedToken);
    req.userData = { email: decodedToken.email, userId: decodedToken.userId };
    next();
  } catch (error) {
    console.log("Inside checkAuth catch");
    res.status(401).json({ message: "Auth failed!" });
  }
};
