import { Login } from "../entities/login";
import { Profile } from "../entities/profiles";
import User from "./models";
import bcrypt from "bcryptjs";

class UserRepository {
  async register(dataProfile: Profile) {
    const selectedUser = await User.findOne({ email: dataProfile.email });
    if (selectedUser) return `user exists`;

    const profile = new User({
      name: dataProfile.name,
      email: dataProfile.email,
      password: bcrypt.hashSync(dataProfile.password),
    });

    try {
      await profile.save();
      return `user saved`;
    } catch (error) {
      return error;
    }
  }

  async login(dataLogin: Login) {
    const selectedUser = await User.findOne({ email: dataLogin.email });
    if (!selectedUser) return `email incorreto`;

    const passwordAndUserMatch = bcrypt.compareSync(
      dataLogin.password,
      selectedUser.password
    );
    if (!passwordAndUserMatch) return `senha incorreta`;

    return `usuario logado`;
  }
}

export default new UserRepository();
