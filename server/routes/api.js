const express = require('express');
const router = express.Router();
const bestBuyApiController = require('../controllers/bestBuyApiController');

router.get('/getLaptops', bestBuyApiController.getLaptops, (req, res) => {
  return res.status(200).json();
});

router.get('/getPhones', bestBuyApiController.getPhones, (req, res) => {
  return res.status(200).json();
});

router.get('/getHeadphones', bestBuyApiController.getHeadphones, (req, res) => {
  return res.status(200).json();
});

router.get(
  '/getDigitalCameras',
  bestBuyApiController.getDigitalCameras,
  (req, res) => {
    return res.status(200).json();
  }
);

router.get(
  '/getRefrigerators',
  bestBuyApiController.getRefrigerators,
  (req, res) => {
    return res.status(200).json();
  }
);

router.get('/getTVs', bestBuyApiController.getTVs, (req, res) => {
  return res.status(200).json();
});

module.exports = router;
