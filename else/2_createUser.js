const { validationResult } = require("express-validator");

// Return early
// 3 paths - tested within 3 cases

// Better
export async function createUser(request, response) {
  const errors = validationResult(request);

  // Exit 1: invalid form
  if (!errors.isEmpty()) {
    return response.status(400).json({
      message: "Validation Failed",
      errors,
    });
  }

  const users = await User.find({ username: request.body.username });

  // Exit 2: duplicated user
  if (users.length > 0) {
    return response.status(409).json({
      message: "Validation Failed",
      errors: {
        username: ["already_exists"],
      },
    });
  }

  const user = new User(request.body);
  const newUser = await user.save();

  return response.status(201).json({
    id: newUser.id,
  });
}
