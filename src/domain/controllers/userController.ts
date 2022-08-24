import { Request, Response } from "express";

class UserController {
  register(req: Request, res: Response) {}
  login(req: Request, res: Response) {
    res.send("login");
  }
}

export default new UserController();
