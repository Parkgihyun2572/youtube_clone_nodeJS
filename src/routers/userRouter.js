import express from "express";
import { logout, removeUser, editUser, seeUser } from "../controllers/userController";

const userRouter = express.Router();


userRouter.get("/logout", logout);
userRouter.get("/edit", editUser);
userRouter.get("/remove", removeUser);
userRouter.get(":id", seeUser);

export default userRouter;