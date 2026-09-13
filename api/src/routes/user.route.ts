import { Router } from "express";
import { 
    getAllUsers,
    getUserById,
    CreateUser
  } from "../controllers/user.controller.ts";

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', CreateUser);

export default userRouter;