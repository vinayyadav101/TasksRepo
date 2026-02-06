import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  
  try {
    const token = (req.cookies.token) || null;
    
    if (!token) {
        logging.info("cookies error")
        return next(new appError('user not login!' , 401))
    }

        const user = jwt.verify(token , process.env.SECRET)

    req.user = user

        next()
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
