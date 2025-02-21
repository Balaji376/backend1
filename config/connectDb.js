

const mongoose=require('mongoose')

const connectDb=async()=>{

    try{

        await mongoose.connect(process.env.mongo_Url)

        console.log('DB Connected')

    }catch(err){
        console.log(err)
    }

}

module.exports =connectDb