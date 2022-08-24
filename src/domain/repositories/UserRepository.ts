import { Profile } from "../entities/profiles";
import User from "./models";

const bcrypt = require("bcryptjs");

class UserRepository {
  async register(dataProfile: Profile) {
    const profile = new User({
      name: dataProfile.name,
      email: dataProfile.email,
      password: bcrypt.hashSync(dataProfile.password),
    });

    try {
      await profile.save();
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default new UserRepository();
