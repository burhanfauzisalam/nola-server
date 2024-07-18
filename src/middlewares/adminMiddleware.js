import pkg from "jsonwebtoken";
const { decode, verify } = pkg;

// require("dotenv").config();

const adminAuth = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized - No token provided" });
  }
  verify(token, process.env["TEACHER_KEY"], (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired" });
      } else {
        return res.status(401).json({ message: "Invalid token" });
      }
    }
    // Continue to the next middleware or route
    req.username = decoded.username;
    req.role = decoded.role;
    next();
  });
};

export default adminAuth;
