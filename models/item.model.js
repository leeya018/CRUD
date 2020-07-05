import mongoose from 'mongoose'
const { Schema } = mongoose

let ItemSchema = new Schema({
    name: { type: String, required: true },
    location:{type:String,default:'Israel'},
    price:{type:Number,default:100}

})

export default mongoose.model('Item', ItemSchema)