import { Router } from "express";
import { 
    getAllUsers,
    getUserById,
    CreateUser,
    UpdateUser,
    deleteUser
  } from "../controllers/user.controller.ts";

const userRouter = Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', CreateUser);
userRouter.put('/:id', UpdateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;