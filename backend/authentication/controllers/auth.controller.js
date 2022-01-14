const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
  const { username, password } = req.body;

  let hash = bcrypt.hashSync(password, 10);

  await UserModel.create({ username, password: hash }, (err, data) => {
    if (err)
      return res.status(400).send({ message: err.message, status: true });
    return res.send(data);
  });
};

module.exports.login = async (req, res) => {
  const username = req.body.username;
  const user = await UserModel.findOne({username});

  if (user) {
    if (!(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(400).send({ message: "Wrong credentials." , error: true});
    }
    
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.send({message: "success"})
  }
  return res.status(400).send({ message : "Wrong credentials", error: true});
};


module.exports.logout = async (req, res) => {

  res.cookie("jwt", '', {
    httpOnly: true,
    maxAge: 0,
  });
  return res.send({message: "logout successfully"});
}

module.exports.get_admin = async (req, res) => {
  let {username, _id: id} = await UserModel.findById(req.userId);
  if(!username) return res.send({message: "motherfucker"})
  return res.send({id, username});
}