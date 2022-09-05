const User = require("../model/userModel");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck)
      return res.json({ msg: "Username already used", status: false });
    const emailCheck = await User.findOne({ email });
    if (emailCheck)
      return res.json({ msg: "Email already used", status: false });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const usernameCheck = await User.findOne({ username });
    if (!usernameCheck)
      return res.json({ msg: "Username or Password incorrect", status: false });
    const passwordCheck = await bcrypt.compare(
      password,
      usernameCheck.password
    );
    if (!passwordCheck)
      return res.json({ msg: "Username or Password incorrect", status: false });

    delete usernameCheck.password;
    return res.json({ status: true, usernameCheck });
  } catch (error) {
    next(error);
  }
};
