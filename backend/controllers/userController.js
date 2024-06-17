import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"User doesnot exists"})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.json({success:false,message:"Invalid Credentials"})
        }

        const token = createToken(user._id);
        res.json({success:true,token});

    } catch (error) {
        res.json({success:false,message:"Error"});
    }
};

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const regiterUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    //checking if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ sucess: false, message: "User already exists" });
    }

    //validating email format and storng password
    if (!validator.isEmail(email)) {
      return res.json({ sucess: false, message: "Please enter a valid email" });
    }

    if (password.length < 8) {
      return res.json({
        sucess: false,
        message: "Please enter a strong password",
      });
    }

    //hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPass,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({sucess:true,token})

    

  } catch (error) {
        console.log(error);
        res.json({sucess:false,message:"Error"})
  }
};

export { loginUser, regiterUser };
