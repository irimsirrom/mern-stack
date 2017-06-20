const express = require('express');
const router = express.Router();

const products = require('./products');

// router.get('/:resource', function(req,res,next){
//   res.json({
//     confirmation: 'success',
//     resource: req.params.resource
//   })
// });

router.use('/products', products)

module.exports = router;
