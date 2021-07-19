const User = require("../../db/models/user");

module.exports.getUserWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.query().findById(id);
    res.send(user);
  } catch (e) {
    res.status(400).send({ message: "Something went wrong!", e });
  }
};
