const express =require('express');
const indexRouter = express.Router();
const dbQuery = require("../config/dataBase")
const jsonwebtoken = require('jsonwebtoken');
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const cookieParser = require('cookie-parser'); 
indexRouter.use(cookieParser());
indexRouter.post('/register', async (req, res, next) => {
    try{
        const name = req.body.name;
        const email = req.body.email;
        let password = req.body.password;
        let confirmPassword = req.body.confirmPassword;
              if (!name || !email || !password || !confirmPassword) {
                return res.sendStatus(400);
             }
             const salt = genSaltSync(10);
             password = hashSync(password, salt);
             confirmPassword = hashSync(confirmPassword, salt);
        const user =  await dbQuery.insertUser(name, email, password,confirmPassword);         
        const jsontoken = jsonwebtoken.sign({user: user}, process.env.SECRET_KEY, { expiresIn: '30m'} );
        res.cookie('token', jsontoken, { httpOnly: true, secure: true, SameSite: 'strict' , expires: new Date(Number(new Date()) + 30*60*1000) }); //we add secure: true, when using https.
        res.json({token: jsontoken});
    } catch(e){    
        console.log(e);
        res.sendStatus(400);
    }
});
module.exports = indexRouter;