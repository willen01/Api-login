import Joi from "@hapi/joi";

class Validate {
  register(data: string) {
    const schema = Joi.object({
      name: Joi.string().required().min(3).max(50),
      email: Joi.string().required().min(3).max(100),
      password: Joi.string().required().min(6).max(200),
    });
    return schema.validate(data);
  }
}

export default new Validate();
