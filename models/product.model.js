import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
});


// Export the model
export default mongoose.model('Product', ProductSchema);    