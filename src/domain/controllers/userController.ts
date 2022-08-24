import { Request, Response } from "express";
import UserRepository from "../repositories/UserRepository";

class UserController {
  async register(req: Request, res: Response) {
    const createProfile = await UserRepository.register(req.body);

    if (createProfile) {
      res.status(201).json({ msg: "usuário cadastrado com sucesso" });
    } else {
      res.status(400).json({ msg: "erro ao cadastrar usuário" });
    }
  }
  login(req: Request, res: Response) {}
}

export default new UserController();
