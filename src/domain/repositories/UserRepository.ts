import { Profile } from "../entities/profiles";
import User from "./models";

const bcrypt = require("bcryptjs");

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
      return `error saving`;
    }
  }
}

export default new UserRepository();
