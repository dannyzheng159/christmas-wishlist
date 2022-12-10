const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.get('/:category', categoryController.displayProducts, (req, res) => {
  return res.status(200).json(res.locals.productDocs);
});

module.exports = router;
