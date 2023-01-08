import mongoose from 'mongoose';

const menuSchema = mongoose.Schema({
    name: String,
    price: String,
    category: String,
    description: String,
    image: String,
    discount: String,
    discount_range: String,
    coupon_code: String,
    coupon_code_range: String ,
    quantity: String,
    status: String
})

const menu = mongoose.model("menu", menuSchema);

export default menu;