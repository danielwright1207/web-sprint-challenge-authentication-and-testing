const { findBy } = require("../auth/user-model");

async function checkUsernameFree(req, res, next) {
  const checkUsername = await findBy({ username: req.body.username });
  if (checkUsername.length >= 1) {
    res.status(422).json({ message: "Username taken" });
  } else {
    next();
  }
}
const checkUsernameExists = (req, res, next) => {
  const { username } = req.body;
  const checkUser = findBy({ username }).first();
  if (checkUser.username === username) {
    res.status(401).json({ message: "Invalid credentials" });
  } else {
    next();
  }
};
module.exports = {
  checkUsernameFree,
  checkUsernameExists,
};
