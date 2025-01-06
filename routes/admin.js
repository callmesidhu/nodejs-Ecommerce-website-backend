var express = require('express');
var router = express.Router();
const Product = require('../models/Product');

const admin = 'true';
const isAdmin = (req, res, next) => {
  if (admin === 'true') { 
    return next(); 
  }
  res.status(403).send('Access denied. Admin only.'); 
};
router.get('/', isAdmin, async (req, res) => {
  res.render('admin');
});




module.exports = router;
