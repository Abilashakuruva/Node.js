const express=require("express")
const mongoose=require("mongoose")
const dotEnv=require("dotenv")
var bcrypt=require('bcryptjs');
const bodyParser = require("body-parser");
const userRoutes=require("./routes/userRoutes")
const cors=require('cors')

const app=express()
dotEnv.config()
app.use(cors())

const PORT=process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MONGODB connected successfully! "))
.catch((error)=>console.log(error))

app.use(bodyParser.json())
app.use('/user',userRoutes);


app.listen(PORT,()=>{
    console.log(`Server started and running @ ${PORT}`)

})

app.use('/',(req,res)=>{
    res.send("<h1>Welcome to MERN Fullstack")
})