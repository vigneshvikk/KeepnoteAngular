const mongoose=require("mongoose")
//conection sting
mongoose.connect("mongodb://localhost:27017/keepnote",{useNewUrlParser:true,useUnifiedTopology:true} )

//model creation
//scheema means fields amd values
const Userdetail=mongoose.model("Userdetail",
{   
    uname:String,
    email:String,
    mobile:Number

})



const Usernote = mongoose.model("Usernote",
{
   note:[]
}
)





module.exports={
    Userdetail,Usernote
}