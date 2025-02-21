

const mongoose=require('mongoose')

const connectDb=async()=>{

    try{

        await mongoose.connect("mongodb+srv://balajideshmukh105:r11omgpNz85d1XXK@curd.6h0wn.mongodb.net/crudDb")

        console.log('DB Connected')

    }catch(err){
        console.log(err)
    }

}

module.exports =connectDb