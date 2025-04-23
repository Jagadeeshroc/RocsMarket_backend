const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName:        { type: String, required: true },
    productDescription: { type: String, required: true },
    productPrice:       { type: Number, required: true },
    productImage:       { type: String, required: true },
    productCategory:    { type: String, required: true },
    productBrand:       { type: String, required: true },
    productColor:       { type: String, required: true },
    productSize:        { type: String, required: true },
    productQuantity:    { type: Number, required: true },
  
    // the ones in your error:
    productCondition:    { type: String, required: true },
    productAvailability: { type: String, required: true },
    productReturnPolicy: { type: String, required: true },
    productShipping:     { type: String, required: true },
    productWarranty:     { type: String, required: true },
    productDiscount:     { type: Number, required: true },
    productReviews:      { type: [String], required: true },
    productRating:       { type: Number, required: true },
    productStock:        { type: Number, required: true },
  })
  

let Product = mongoose.model('Product', productSchema);
module.exports = Product;
// module.exports = mongoose.model('Product', productSchema);