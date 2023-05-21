//import express
const express=require("express")

//import dataservice
const ds=require('./service/dataService')


//import cors
const cors=require("cors")


//imort jswt
const jwt=require("jsonwebtoken")

//appcreation
const app=express()

//to convert all data from json to js
app.use(express.json())


// integrate app with frontend
app.use(cors({origin:"http://localhost:4200"}))









//middleware creation

const jwtMiddleware=(req,res,next)=>{
    try{    
        //acces data from request
    const token=req.headers['access_header']
    //verify the token with secret key
    const data=jwt.verify(token,"superkey123")
    console.log(data);
    
    next()
    }
    catch{
        res.status(422).json(
            {
                status:false,
                message:"please login",
                statusCode:404
            })
        
    }
    }










//register
app.post("/register",(req,res)=>{
   ds.register(req.body.uname,req.body.email,req.body.mobile).then(result=>{
    res.status(result.statusCode).json(result)
   })
  

})


//login
app.post("/login",(req,res)=>{
    ds.login(req.body.email,req.body.mobile).then(result=>{
        res.status(result.statusCode).json(result)

    })
   

})

//input
app.post("/input",jwtMiddleware,(req,res)=>{
    
    ds.input(req.body.mobile,req.body.title,req.body.content,req.body.slno).then(result=>{
        res.status(result.statusCode).json(result)

    })
})


//getnotes

app.post("/note",jwtMiddleware,(req,res)=>{
    
    ds.getNote(req.body.mobile).then(result=>{
        res.status(result.statusCode).json(result)

    })
})





//delete      
                    //to store params variable  
                    app.delete("/delete/:currentMobile",(req,res)=>{
                        //delete acc comes as a params
                    ds.deleteAcc(req.params.currentMobile).then(result=>{
                    res.status(result.statusCode).json(result)
                    
                    })
                    })
                    

                 

















//portset
app.listen(3000,()=>{
console.log("server start at 3000");
})
