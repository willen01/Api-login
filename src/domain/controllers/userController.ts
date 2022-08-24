import { Request, Response } from "express";
import UserRepository from "../repositories/UserRepository";

class UserController {
  async register(req: Request, res: Response) {
    const createProfile = await UserRepository.register(req.body);

    if (createProfile) {
      res.status(201).send();
    } else {
      res.status(400).send();
    }
  }
  login(req: Request, res: Response) {}
}

export default new UserController();
