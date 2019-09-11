const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.User
      .find({})
      .sort({ appointments: -1 })
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(502).json(err))
  },

  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(502.json(err)))
  },

  delete: function (req, res) {
    db.User
      .findByIdAndDelete(req.params.id)
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(502).json(err))
  }
};