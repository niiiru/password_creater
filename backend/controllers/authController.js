const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "Пользователь уже существует" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ email, password: hashedPassword });

    const token = jwt.sign({ id: newUser._id }, `${process.env.JWT_SECRET}`, {
      expiresIn: "7d",
    });

    res.status(201).json({
      user: {
        id: newUser._id,
        email: newUser.email,
      },
      token,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Ошибка при регистрации", error: err.message });
  }
};

exports.authUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Пользователь не найден" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Неверный пароль" });

    const token = jwt.sign({ id: user._id }, `${process.env.JWT_SECRET}`, {
      expiresIn: "7d",
    });

    res.status(200).json({
      user: {
        id: user._id,
        email: user.email,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Ошибка при входе", error: err.message });
  }
};
