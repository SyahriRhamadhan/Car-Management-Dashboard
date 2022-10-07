const mongosose = require('mongoose')

const connectDB = async() =>{
    try{
        //mongodb connection string
        const con = await mongosose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB connected:${con.connection.host}`)

    }catch(err){
        console.log(err)
        process.exit(1)
    }
}
module.exports = connectDB