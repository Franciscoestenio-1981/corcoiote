import type { Request, Response } from 'express';
import { findAllUsers } from "../services/user.service.ts";

export function getAllUsers(request: Request, response: Response) {
    const users = findAllUsers();

    response.status(200).json(users);
}