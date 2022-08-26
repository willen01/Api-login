import { Request, Response } from "express";
import UserRepository from "../repositories/UserRepository";
import validate from "./validate";

class UserController {
  async register(req: Request, res: Response) {
    const createProfile = await UserRepository.register(req.body);

    const { error } = validate.register(req.body);
    if (error) return res.status(400).send(error.message);

    if (createProfile === "user exists") {
      res.status(404).json({ msg: "email já cadastrado" });
    } else if (createProfile === "user saved") {
      res.status(201).json({ msg: "usuário cadastrado com sucesso" });
    } else {
      res.status(400).json({ msg: "erro ao cadastrar usuário", createProfile });
    }
  }
  async login(req: Request, res: Response) {
    const loginUser = await UserRepository.login(req.body);

    if (loginUser == "email incorreto") {
      res.status(400).json({ msg: "Email incorreto" });
    } else if (loginUser === "senha incorreta") {
      res.status(400).json({ msg: "Senha incorreta" });
    } else {
      res.status(200).json({ msg: "Usuário logado" });
    }
  }
}

export default new UserController();
