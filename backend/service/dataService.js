const jwt=require("jsonwebtoken")
const db=require('./db')





register=(uname,email,mobile)=>{
    return db.Userdetail.findOne({mobile}).then(userdetail=>{
      if(userdetail){
        return {
          status:false,
          message:"user already present",
          statusCode:404
        }
      }else{
        newUserDetail=new db.Userdetail({
          uname:uname,
          email:email,
          mobile:mobile,
          note:[]  
        })
        newUserDetail.save()

        return {
          status:true,
          message:"registered",
          statusCode:200
        }

      }
    })
      
  }




  
login=(email,mobile)=>{

    return db.Userdetail.findOne({mobile,email}).then(userdetail=>{
       if(userdetail){
         
      currentUser=userdetail.uname
      currentMobile=userdetail.mobile
       
       
      const token=jwt.sign({mobile},"superkey123") // first it expect unique data of login and any string data we do want
   
       return {
         status:true,
         message:"login success",
         statusCode:200,
         currentUser,
         currentMobile,
         token
       }
       }else{
         return {
           status:false,
           message:"login failed",
           statusCode:404
         }
       }
     })
   
   
       
      
     }




    //  input=(mobile,title,content,slno)=>{
    //     var mob = parseInt(mobile) 
    //     var sl =parseInt(slno)

    //     return db.Userdetail.findOne({mobile:mob}).then(userdetail=>{
    //       if(userdetail){

    //         userdetail.note.push({slno:sl,list:title,content:content})
            
    //         userdetail.save()
    //               return{
    //                         status:true,
    //                         message:"added",
    //                         statusCode:200
    //                     }
    //        }else{
          
          
    //                     return{
    //                         status:false,
    //                         message:"not added",
    //                         statusCode:200
    //                     }
    //        }

                       
           
          
    
    //     })
    //   }


    
    input=(mobile,title,content,slno)=>{
      var mob = parseInt(mobile) 
      var sl =parseInt(slno)

      

          return db.Usernote.note.insert({slno:sl,list:title,content:content}).then(usernote=>{

            if (db.Usernote) {
              usernote.save()
            return{
              status:true,
              message:"added",
              statusCode:200
          }
        }else{
        
        
          return{
              status:false,
              message:"not added",
              statusCode:200
          }
            
      }
    })
  }
    



       
  getNote=(mobile)=>{
    return db.Userdetail.findOne({mobile}).then(userdetail=>{
      if(userdetail){
        return {
          status:true,
          note: userdetail.note,
          statusCode:200
          }
        }
    })
    }

// update=(mobile,title,content,slno)=>{
//        var mob = parseInt(mobile) 
//         var sl =parseInt(slno)

//         return db.Userdetail.findOne({mobile:mob}).then(userdetail=>{
//             if(userdetail){
//                 // const noteDetail=userdetail.note
//                 for (const i in userdetail.note) {
    
//                     if( userdetail.note[i].slno==sl){
                     
//                     //  note[i].content="ccccc"
//                     //  console.log(note);

//                     userdetail.note[i].list=title
//                     userdetail.note[i].content=content
                    
//                     return {
//                         status:true,
//                         message:"updated",
//                         statusCode:200 
//                       }
//                     }else{
//                         return {
//                             status:false,
//                             message:"slno does not exist",
//                             statusCode:404
//                           }  
//                     }
//                 }

//             }
//         })
// }
 




// delete
deleteAcc=(mobile)=>{
  return db.Userdetail.deleteOne({mobile}).then(userdetail=>{
    if(userdetail){
      return {
        status:true,
        message:"ac delete",
        statusCode:200
        }
    }else{
      return {
        status:false,
        message:"ac not present",
        statusCode:401
        }
    }
  })

   }
  


 
module.exports={
    register,login,input,getNote,deleteAcc
}

























   // console.log(sl);
       
         
        //    return db.Userdetail.findOne({mobile:mob}).then(userdetail=>{
        //      if(userdetail){
                        // const noteDetail=userdetail.note

                    //     for ( i in userdetail.note) {
                          





                    //         if( userdetail.note[i].slno==sl){
                                
                    //             return {
                    //                 status:false,
                    //                 message:"please choose different slno",
                    //                 statusCode:404
                    //               }
                    //         }
                    //          if(userdetail.note[i].slno!=sl) {
                    //             userdetail.note.push({slno:sl,list:title,content:content})
                    //             userdetail.save()
                    //             return{
                    //                 status:true,
                    //                 message:"added",
                    //                 statusCode:200
                    //             }
                    //         }



                       
                   
                    // }


                    // return db.Userdetail.find({(note[slno]):{eq:sl}}).then(notes=>{
                    //   console.log();
                    // })