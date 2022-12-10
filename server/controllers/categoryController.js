const Item = require('../models/bestBuyModel');
const categoryController = {};

categoryController.displayProducts = (req, res, next) => {
  // console.log(req.params.category);
  const { category } = req.params;
  Item.find({ category: category })
    .exec()
    .then((productDocs) => {
      console.log(productDocs);
      res.locals.productDocs = productDocs;
      return next();
    })
    .catch((err) => {
      return next({
        log: `categoryController.displayProducts: ERROR: unable to get products`,
        status: 500,
        message: {
          err: `categoryController.displayProducts: ERROR: Check server logs for details`,
        },
      });
    });

  return next;
};

// EXPORT THE CONTROLLER HERE
module.exports = categoryController;
