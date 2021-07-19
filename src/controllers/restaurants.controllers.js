const User = require("../../db/models/user");

module.exports = {
  getAllRestaurants: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.query().findById(id);
      res.send(user);
    } catch (e) {
      res.status(400).send({ message: "Something went wrong!", e });
    }
  },
  getOneRestaurant: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.query().findById(id);
      res.send(user);
    } catch (e) {
      res.status(400).send({ message: "Something went wrong!", e });
    }
  },
  createRestaurant: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.query().findById(id);
      res.send(user);
    } catch (e) {
      res.status(400).send({ message: "Something went wrong!", e });
    }
  },
  updateRestaurant: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.query().findById(id);
      res.send(user);
    } catch (e) {
      res.status(400).send({ message: "Something went wrong!", e });
    }
  },
  deleteRestaurant: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.query().findById(id);
      res.send(user);
    } catch (e) {
      res.status(400).send({ message: "Something went wrong!", e });
    }
  },
};
