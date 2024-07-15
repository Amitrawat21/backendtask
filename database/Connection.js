import mongoose from "mongoose";


 mongoose.connect("mongodb+srv://AmitRawat:AmitRawat21@cluster0.v2znl.mongodb.net/todquest?retryWrites=true&w=majority", {
    useUnifiedTopology :true,
    useNewUrlParser : true
    
}).then(()=>{
    console.log("database Connected")
}).catch((error)=>{
    console.log("database is not connected ")
})