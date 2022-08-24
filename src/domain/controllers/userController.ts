import { Request, Response } from "express";
import UserRepository from "../repositories/UserRepository";

class UserController {
  async register(req: Request, res: Response) {
    const createProfile = await UserRepository.register(req.body);
    console.log(createProfile);

    if (createProfile === "user exists") {
      res.status(404).json({ msg: "email já cadastrado" });
    } else if (createProfile === "user saved") {
      res.status(201).json({ msg: "usuário cadastrado com sucesso" });
    } else if (createProfile === "error saving") {
      res.status(400).json({ msg: "erro ao cadastrar usuário" });
    }
  }
  login(req: Request, res: Response) {}
}

export default new UserController();
