const User=require("../models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

exports.register = async (req, res) => {

  try {

    const exist = await User.findOne({
      email: req.body.email
    });

    if (exist) {
      return res.status(400).send("Email já cadastrado");
    }

    const hash = await bcrypt.hash(req.body.password, 10);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash
    });

    await user.save();

    res.send(user);

  } catch {

    res.status(500).send("Erro no cadastro");

  }

};

exports.login = async (req, res) => {

  const user = await User.findOne({ email: req.body.email });

  if (!user)
    return res.status(400).send("Usuário não encontrado");

  const valid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!valid)
    return res.status(400).send("Senha incorreta");

  const token = jwt.sign({
    id: user._id,
    name: user.name
  }, process.env.JWT_SECRET);

  res.json({ token });

};