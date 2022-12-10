const Item = require('../models/bestBuyModel');
const WishListItem = require('../models/wishListModel');
const wishListController = {};

wishListController.getWishList = (req, res, next) => {
  WishListItem.find({})
    .exec()
    .then((wishListDocs) => {
      // console.log(wishListDocs);
      res.locals.wishListDocs = wishListDocs;
      return next();
    })
    .catch((err) => {
      return next({
        log: `wishListController.getWishList: ERROR: unable to get wishlist`,
        status: 500,
        message: {
          err: `wishListController.getWishList: ERROR: Check server logs for details`,
        },
      });
    });
};

wishListController.addItem = (req, res, next) => {
  // temp request
  // console.log(req.body);
  const { name } = req.body;
  Item.findOne({ name })
    .then((itemDoc) => {
      // console.log(itemDoc);
      const {
        _id,
        category,
        name,
        condition,
        addToCartUrl,
        image,
        regularPrice,
        salePrice,
        ShortDescription,
        url,
      } = itemDoc;
      WishListItem.create({
        _id,
        category,
        name,
        condition,
        addToCartUrl,
        image,
        regularPrice,
        salePrice,
        ShortDescription,
        url,
      });
      console.log(`${name} added to wishlist.`);
      return next();
    })
    .catch((err) => {
      return next({
        log: `wishListController.addItem: ERROR: unable to add ${name}`,
        status: 500,
        message: {
          err: `wishListController.addItem: ERROR: Check server logs for details`,
        },
      });
    });
};

wishListController.deleteItem = (req, res, next) => {
  const { name } = req.body;
  WishListItem.findOneAndDelete({ name })
    .then((deletedWishListDoc) => {
      console.log(deletedWishListDoc);
      res.locals.deletedWishListDoc = deletedWishListDoc;
      console.log(`${name} removed from wishlist.`);
      return next();
    })
    .catch((err) => {
      return next({
        log: `wishListController.deleteItem: ERROR: unable to delete ${name}`,
        status: 500,
        message: {
          err: `wishListController.deleteItem: ERROR: Check server logs for details`,
        },
      });
    });
};

// EXPORT THE CONTROLLER HERE
module.exports = wishListController;
