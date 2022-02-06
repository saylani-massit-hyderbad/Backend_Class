const exp =  require("express")
const cors = require("cors")
const bd= require("body-parser")
const mongoose = require("mongoose")
const app = exp()
const port = 5000

const mainRouter = require("./routes/main_router")

app.use(cors())

app.use(bd.urlencoded({
    extended:false
}))

app.use(bd.json())

mongoose.connect("",
{
    useNewUrlParser:true,
    useUnifiedTopology:true

})

mongoose.connection.on("connected",()=>{
    console.log("Data connnet")
})

mongoose.connection.on("error",()=>{
    console.log("Darta error")
})

app.get("/",(req,res)=>{
    res.send("Hello first api")
})

app.use(mainRouter)

app.listen(port,()=>{
    console.log("Ruinning server")
})