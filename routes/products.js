const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Product = require('../models/product');

router.get('/', (req, res) => {
          Product.find((err, products) => {
              if (err)
                  res.send(err)
              res.json(products);
          });
      });

router.post('/', (req, res) => {
          Product.create({
              product_name : req.body.product_name,
              category : req.body.category,
              img_src : req.body.img_src,
              price : req.body.price,
              done : false
          }, (err, products) => {
              if (err)
                  res.send(err);
              Product.find((err, products) => {
                  if (err)
                      res.send(err)
                  res.json(products);
              });
          });
      });

router.delete('/:product_id', (req, res) => {
          Product.remove({
              _id : req.params.product_id
          }, (err, product) => {
              if (err)
                  res.send(err);
              Product.find((err, products) => {
                  if (err)
                      res.send(err)
                  res.json(prodcuts);
              });
          });
      });

module.exports = router;
