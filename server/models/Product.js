import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : true ,
    },
    quantity : {
        type : Number,
        default : 0
    }
    
},
{
    timestamps : true,
})

export const productModel = mongoose.model('Product', productSchema)
