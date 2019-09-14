const express = require('./node_modules/express');
const router = express.Router();
const userController = require('../../controllers/userController');

router
  .route('/')
  .get(userController.findAll)
  .post(userController.create);

router.route('/:id').delete(userController.delete);

module.exports = router;
