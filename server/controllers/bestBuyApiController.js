const Item = require('../models/bestBuyModel');

const fetch = require('node-fetch');

const bestBuyApiController = {};

const storeToDatabase = (category, url, next) => {
  fetch(url)
    .then((rawData) => rawData.json())
    .then((data) => {
      // console.log(data);
      for (let i = 0; i < data.products.length; i++) {
        const {
          name,
          condition,
          addToCartUrl,
          image,
          regularPrice,
          salePrice,
          ShortDescription,
          url,
        } = data.products[i];
        Item.create({
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
      }
      // res.locals.laptopData = data.products;
      return next();
    })
    .catch((err) => {
      return next({
        log: `bestbuyapiController.get${category}: ERROR: unable to find data at ${url}`,
        status: 500,
        message: {
          err: `bestbuyapiController.get${category}: ERROR: Check server logs for details`,
        },
      });
    });
};

bestBuyApiController.getLaptops = (req, res, next) => {
  storeToDatabase(
    'Laptops',
    'https://api.bestbuy.com/v1/products((categoryPath.id=abcat0502000))?apiKey=hNAOUmPqUCY8AsJKjiYvGA8V&sort=regularPrice.dsc&show=name,condition,addToCartUrl,image,regularPrice,salePrice,shortDescription,url&pageSize=30&format=json',
    next
  );
};

bestBuyApiController.getPhones = (req, res, next) => {
  storeToDatabase(
    'Phones',
    'https://api.bestbuy.com/v1/products((categoryPath.id=pcmcat209400050001))?apiKey=hNAOUmPqUCY8AsJKjiYvGA8V&sort=name.dsc&show=name,condition,addToCartUrl,image,regularPrice,salePrice,url,shortDescription&pageSize=30&format=json',
    next
  );
};

bestBuyApiController.getHeadphones = (req, res, next) => {
  storeToDatabase(
    'Headphones',
    'https://api.bestbuy.com/v1/products((categoryPath.id=abcat0204000))?apiKey=hNAOUmPqUCY8AsJKjiYvGA8V&sort=name.dsc&show=name,condition,addToCartUrl,image,regularPrice,salePrice,url,shortDescription&pageSize=30&format=json',
    next
  );
};

bestBuyApiController.getDigitalCameras = (req, res, next) => {
  storeToDatabase(
    'Digital Cameras',
    'https://api.bestbuy.com/v1/products((categoryPath.id=abcat0401000))?apiKey=hNAOUmPqUCY8AsJKjiYvGA8V&sort=name.dsc&show=name,condition,addToCartUrl,image,regularPrice,salePrice,url,shortDescription&pageSize=30&format=json',
    next
  );
};

bestBuyApiController.getRefrigerators = (req, res, next) => {
  storeToDatabase(
    'Refrigerators',
    'https://api.bestbuy.com/v1/products((categoryPath.id=abcat0901000))?apiKey=hNAOUmPqUCY8AsJKjiYvGA8V&sort=name.dsc&show=name,condition,addToCartUrl,image,regularPrice,salePrice,url,shortDescription&pageSize=30&format=json',
    next
  );
};

bestBuyApiController.getTVs = (req, res, next) => {
  storeToDatabase(
    'TVs',
    'https://api.bestbuy.com/v1/products((categoryPath.id=abcat0101000))?apiKey=hNAOUmPqUCY8AsJKjiYvGA8V&sort=name.dsc&show=name,condition,addToCartUrl,image,regularPrice,salePrice,url,shortDescription&pageSize=30&format=json',
    next
  );
};

// EXPORT THE CONTROLLER HERE
module.exports = bestBuyApiController;
