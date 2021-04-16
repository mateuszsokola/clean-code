const { validationResult } = require("express-validator");

// 4 paths - testable within 4 cases
// complexity (graph)
export async function createUser(request, response) {
  const errors = validationResult(request);

  if (errors.isEmpty()) {
    const users = await User.find({ username: request.body.username });

    if (users.length === 0) {
      const user = new User(request.body);
      const newUser = await user.save();

      return response.status(201).json({
        id: newUser.id,
      });
    } else {
      return response.status(409).json({
        message: "Validation Failed",
        errors: {
          username: ["already_exists"],
        },
      });
    }
  } else {
    return response.status(400).json({
      message: "Validation Failed",
      errors,
    });
  }
}
