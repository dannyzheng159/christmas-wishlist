const express = require('express');
const router = express.Router();
const wishListController = require('../controllers/wishListController');

router.get('/', wishListController.getWishList, (req, res) => {
  return res.status(200).json(res.locals.wishListDocs);
});

router.post('/addItem', wishListController.addItem, (req, res) => {
  return res.status(200).send();
});

router.delete('/', wishListController.deleteItem, (req, res) => {
  return res.status(200).send(res.locals.deletedWishListDoc);
});

module.exports = router;
