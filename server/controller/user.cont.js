import User from "../models/user.model";
import bcrypt from 'bcrypt';
import  JWT  from 'jsonwebtoken';

// For registration

export const regUser= async(req,res)=>{

    try {
     const {name,email,number,password} = req.body
     let existingUser = await User.findOne({email})
   
      // For existing user
   
      if (existingUser) {
         return res.status(400).send({
           success:false,
           message: "User already exist"
         })
      }
   
      // For New User
   
        let hashedPass = await bcrypt.hash(password,10)
   
        let userData = new User({
         name,email,number,password:hashedPass
        })
   
        const save = userData.save()
   
         res.status(200).json({
           success : true,
           message:"User Sucessfully Registered"
         })
     
    } catch (error) {
     console.log(error)
     res.status(400).json({
       success:false,
       message:"error in Reg"
     })
    }   
       }


        //  For Login

        export const userLogin= async(req,res)=>{
            try {
        
              const{email,password} = req.body
              console.log(req.body);
        
               const user = await User.findOne({email})
        
               if (!user) {
                 return res.status(400).send({
                   success:false,
                   message : "Email is not registered/Invalid" 
                 })
               }
        
               const match = await bcrypt.compare(password,user.password)
        
               if (!match) {
                 return res.status(400).send({
                  success: false,
                  message:"Invalid Passsword"
                 })
               }
        
               let token = JWT.sign(
                { _id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"}
                )
        
               res.status(200).send({
                success:true,
                message : "login successful",
                user:{
                  _id: user._id,
                  name:user.name,
                  email:user.email,
                  role:user.role
                },
                token
               })
              
            } 
            
            catch (error) {
              console.log(error);
              res.status(500).send({
                success: false,
                message: "Error in login",
              })
            }
        
            }


            // export const GetAllUsers=async(req,res)=>{

            //     try {
            //          const userData = await User.find({}) 
            //          res.status(200).json({
            //           success:true,
            //           message:"All users data",
            //           userData
            //          })
        
            //     } 
                
            //     catch (error) {
            //         res.status(500).send({
            //             success: false,
            //             message: "Error in fetching users",
            //           })
            //     }   
            //    }
