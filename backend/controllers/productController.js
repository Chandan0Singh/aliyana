// controllers/productController.js
const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const getProductsByGender = async (req, res) => {
  try {
    const products = await Product.find({ gender: req.params.gender });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const getSaleProducts = async (req, res) =>{
    try{
        const products = await Product.find({
            sale: { $exists: true, $ne: null },
        });
        res.json(products);
    } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
}

const getExploreData = async (req, res) => {
  try {
    const products = await Product.find({});
    const tags = ["classic", "premium", "trending", "popular"];
    const exploreData = {
      classic: [],
      premium: [],
      trending: [],
      popular: [],
      all: [],
    };

    for (const product of products) {
      let added = false;
      for (const tag of tags) {
        if (product.tags.includes(tag)) {
          exploreData[tag].push(product);
          added = true;
        }
      }
      if (added) {
        exploreData.all.push(product);
      }
    }

    res.json(exploreData);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const getNewArrivals = async (req, res) => {
  try {
    const today = new Date();
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(today.getDate() - 30);

    const newProducts = await Product.find({
      arrivalDate: {
        $gte: thirtyDaysAgo.toISOString(), // ISO date string
      },
    });

    res.json(newProducts);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};


module.exports = {
  getAllProducts,
  getProductsByGender,
  getSaleProducts,
  getExploreData,
  getNewArrivals, 
};
