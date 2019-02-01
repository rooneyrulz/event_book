import User from "../models/userSchema";

export const getCurrentUser = (id) => {
  return User
    .findOne({ _id: id })
    .exec()
    .then(user => {
      if (!user) {
        console.log(`logged in first...`);
      } else {
        return { user };
      }
    })
    .catch(err => {
      throw err;
    });
}