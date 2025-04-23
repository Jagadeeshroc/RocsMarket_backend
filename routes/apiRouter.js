const express = require('express');
const router = express.Router()
const Product = require('../models/product');


// Define a route to get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

);

module.exports= router;

// Define a route to get a single product by ID
router.get('/products/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Define a route to create a new product


    router.post('/products', async (req, res) => {
        try {
          const product = new Product({
            productName:        req.body.productName,
            productDescription: req.body.productDescription,
            productPrice:       req.body.productPrice,
            productImage:       req.body.productImage,
            productCategory:    req.body.productCategory,
            productBrand:       req.body.productBrand,
            productColor:       req.body.productColor,
            productSize:        req.body.productSize,
            productQuantity:    req.body.productQuantity,
      
            // 🔽 INCLUDE THESE 🔽
            productCondition:    req.body.productCondition,
            productAvailability: req.body.productAvailability,
            productReturnPolicy: req.body.productReturnPolicy,
            productShipping:     req.body.productShipping,
            productWarranty:     req.body.productWarranty,
            productDiscount:     req.body.productDiscount,
            productReviews:      req.body.productReviews,
            productRating:       req.body.productRating,
            productStock:        req.body.productStock,
          });
      
          const savedProduct = await product.save();
          res.status(201).json(savedProduct);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
        
      });
      
// Define a route to update a product by ID
router.put('/products/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req
.params.id
, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
);
// Define a route to delete a product by ID
router.delete('/products/:id', async (req, res) => {
    try {
        const deletedProduct = await
Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Define a route to get products by category
router.get('/products/category/:category', async (req, res) => {
    try {
        const products = await Product.find({ productCategory: req.params.category });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Define a route to get products by brand
router.get('/products/brand/:brand', async (req, res) => {
    try {
        const products = await Product.find({ productBrand: req.params.brand });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Define a route to get products by color
router.get('/products/color/:color', async (req, res) => {
    try {
        const products = await Product.find({ productColor: req.params.color });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Define a route to get products by size
router.get('/products/size/:size', async (req, res) => {
    try {
        const products = await Product.find({ productSize: req.params.size });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Define a route to get products by price range
router.get('/products/price/:min/:max', async (req, res) => {
    try {
        const products = await Product.find({
            productPrice: { $gte: req.params.min, $lte: req.params.max }
        });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Define a route to get products by rating
router.get('/products/rating/:rating', async (req, res) => {
    try {
        const products = await Product.find({ productRating: { $gte: req.params.rating } });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Define a route to get products by stock availability
router.get('/products/stock/:stock', async (req, res) => {
    try {
        const products = await Product.find({ productStock: { $gte: req.params.stock } });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Define a route to get products by warranty
router.get('/products/warranty/:warranty', async (req, res) => {
    try {
        const products = await Product.find({ productWarranty: req.params.warranty });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Define a route to get products by shipping
router.get('/products/shipping/:shipping', async (req, res) => {
    try {
        const products = await Product.find({ productShipping: req.params.shipping });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Define a route to get products by return policy
router.get('/products/return/:returnPolicy', async (req, res) => {
    try {
        const products = await Product.find({ productReturnPolicy: req.params.returnPolicy });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Define a route to get products by discount
router.get('/products/discount/:discount', async (req, res) => {
    try {
        const products = await Product.find({ productDiscount: { $gte: req.params.discount } });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Define a route to get products by reviews
router.get('/products/reviews/:reviews', async (req, res) => {
    try {
        const products = await Product.find({ productReviews: { $gte: req.params.reviews } });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Define a route to get products by name
router.get('/products/name/:name', async (req, res) => {
    try {
        const products = await Product.find({ productName: { $regex: req.params.name, $options: 'i' } });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Define a route to get products by description
router.get('/products/description/:description', async (req, res) => {
    try {
        const products = await Product.find
({ productDescription: { $regex: req.params.description, $options: 'i' } });
        res.status(200).json(products);
    }

    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Define a route to get products by category and brand
router.get('/products/category/:category/brand/:brand', async (req, res) => {
    try {
        const products = await Product
.find({ productCategory: req.params.category, productBrand: req.params.brand });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);
// Define a route to get products by category and color
router.get('/products/category/:category/color/:color', async (req, res) => {
    try {
        const products = await Product
.find({ productCategory: req.params.category, productColor: req.params.color });
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
);


