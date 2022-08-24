import { Router } from "express";
import userController from "../domain/controllers/userController";

const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

export { router };
