import bcrypt from "bcrypt";
import { db } from "../config/db.js";
import { generateToken } from "../config/jwt.js";
import { randomUUID } from "crypto";

const cookieOptions = {
    httpOnly:true,
    path:"/",
    maxAge: 24 * 60 * 60 *1000
};

export const register = async (req, res, next) => {
  try {
    const uniqueId = randomUUID();
    const { name, email, password, role } = req.body;
    const hash = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO employees (id,name,email,password,role) VALUES (?,?,?,?)",
      [uniqueId,name, email, hash, role]
    );

    res.status(201).json({ message: "User registered" });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const [[user]] = await db.query(
      "SELECT * FROM employees WHERE email=?",
      [email]
    );

    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ message: "Invalid credentials" });

      const token = generateToken(user)
      
      res.cookie('token' , token , cookieOptions)

      res.status(200).json({
        code:1,
        msg:"user login successfully",
        time:Date.now(),
    })
  } catch (err) {
    next(err);
  }
};

export const logout = (req, res) => {
    res.clearCookie('token', cookieOptions);
    res.status(200).json({"user logout successfully":true})
}
