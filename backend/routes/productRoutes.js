// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductsByGender,
  getSaleProducts,
  getExploreData,
  getNewArrivals,
  getProductById,
} = require("../controllers/productController");

router.get("/", getAllProducts); // /api/products
router.get("/gender/:gender", getProductsByGender); // /api/products/gender/male
router.get("/sale", getSaleProducts); 
router.get("/explore", getExploreData); 
router.get("/new", getNewArrivals);
router.get("/:id", getProductById);


module.exports = router;
