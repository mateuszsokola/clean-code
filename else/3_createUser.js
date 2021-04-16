// Best

// use middlewares for form validation, and checking uniqueness of usernames.
export async function createUser(request) {
  const user = new User(request.body);
  const newUser = await user.save();

  return newUser;
}
