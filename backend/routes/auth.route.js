import express from "express";
import { login, logOut, signUp, forgetPassword} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", login)
authRouter.post("/logout", logOut)
authRouter.post("/forget-password", forgetPassword);
export default authRouter;
