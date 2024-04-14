"use strict";
/* ___________________ User Model __________________ */
const { mongoose } = require("../configs/dbConnection");
const passwordEncrypt = require("../helpers/passwordEncrypt");
/* ______________________________________________ *
{
    "username": "admin",
    "password": "aA?1234",
    "email": "admin@site.com",
    "isActive": true,
    "isStaff": false,
    "isAdmin": true
}
/* ______________________________________________ */
const UserSchema = new mongoose.Schema(
	{
        username:{
            type:String,
            trim:true,
            required:true,
            unique:true
        },
        password:{
            type:String,
            trim:true,
            required:true,
            set:(password)=> passwordEncrypt(password),
        },
        email:{
            type:String,
            trim:true,
            required:true,
            unique:true,
            validate: [
                (email) => { 
                    const regexEmailCheck=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                    return regexEmailCheck.test(email)                
                },
                'Email type is not correct.'
            ]
        },
        firstName: String,

        lastName: String,
    
        isActive: {
            type: Boolean,
            default: true,
        },
    
        isStaff: {
            type: Boolean,
            default: false,
        },
    
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
	{
		collection: "users",
		timestamps: true,
	}
);

module.exports = mongoose.model("User", UserSchema);
