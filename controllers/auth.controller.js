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
      return res.status(400).send({ message: "Wrong credentials." });
    }
    
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.send({message: "success"})
  }
  return res.status(400).send({ message : "Wrong credentials"});
};


module.exports.logout = async (req, res) => {

  res.cookie('jwt', '', {maxAge : 0});
  
  return res.send();
}

module.exports.get_admin = async (req, res) => {

  const cookie = req.cookies['jwt'];

  if(!cookie) {
    return res.status(400).send({message : "Invalid authentication"})
  }

  const claims = jwt.verify(cookie, process.env.JWT_SECRET);

  if(!claims) {
    res.cookie('jwt', '', {maxAge : 0});
    return res.status(400).send({message: "Invalid authentication"})
  }

  console.log(claims);
  return res.send();
}