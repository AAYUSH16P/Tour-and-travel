import User from '../models/Tour.js';
import bcrypt from 'bcryptjs';


export const createUser = async(req,res)=>{
    const newUser = new User(req.body)

    try{
        const savedUser = await newUser.save()

        res.status(200).json({success:true,message:"Successfully created",data: savedUser,});
    }catch(err){
        res.status(500).json({success:false,message:"Failed to create.Try again" });
    }
}

export const updateUser = async (req,res) =>{
    const id=req.params.id;
    try{
        const updatedUser = await User.findByIdAndUpdate(id,{
            $net: req.body
        },{new:true})

        res.status(200).json({
            success: true,
            message:"Successfulyy updated",
            data: updatedUser,
        });
    }catch(err){
        res.status(200).json({
            success: false,
            message:"failed updated",
            
        });
    }
};

export const deleteUser = async(req,res)=>{
    const id=req.params.id;
    try{
        const deletedUser = await User.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message:"Successfulyy deleted",
        });
    }catch(err){
        res.status(200).json({
            success: false,
            message:"failed to delete",
            
        });
    }
};

export const getSingleUser = async(req,res)=>{
    const id=req.params.id;
    try{
       const user = await User.findById(id);
       
       res.status(200).json({
        success: true,
        message:"Successfull",
        data: user,
    });
    }catch(err){
        res.status(200).json({
            success: false,
            message:"Not found",
        })
   }
};


export const getAllUser = async(req,res)=>{

    

    try{
        const users = await User.find({})

        res.status(200).json({success:true,message:"Successful",data:users});
    }catch(err){
        res.status(404).json({
            success: false,
            message:"not found",
            
        });
    }
};