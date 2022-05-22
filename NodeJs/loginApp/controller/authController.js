const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const user = require('../model/userSchema');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());


//Get All User
router.get('/user', (req,res) => {
    user.find({},(err,data) => {
     if(err) throw err;
     res.send(data);
    })
})


//Register User
router.post('/register', (req,res) =>{
    //encrypt password
    let hashPassword = bcrypt.hashSync(req.body.password,8);
    user.create({
        name:req.body.name,
        email:req.body.email,
        password:hashPassword,
        phone:req.body.phone,
        role:req.body.role?req.body.role:'user',
    },(err,data) => {
        if(err) return res.status(500).send('Error While Register')
        res.status(200).send('Registration Successful')
    })
})

//LoginUser
router.post('/login',(req,res) => {
    user.findOne({email:req.body.email}, (err,user) => {
        if(err) return res.status(500).send({auth:false,token:'Error While Register'})
        if(!user) return res.status(200).send({auth:false,token:'No User Found'})
        else{
            const passIsValid = bcrypt.compareSync(req.body.password,user.password);
             if(!passIsValid) return res.status(200).send({auth:false,token:'Invalid Password'})
             // in case password match generate token
             let token = jwt.sign({id:user._id},config.secret,{expiresIn:86400})
             res.status(200).send({auth:true,token:token})
        }
    })

})

//userInfo
router.get('/userInfo', (req,res) => {
    let token = req.headers['x-access-token'];
    if(!token) res.status(200).send({auth:false,token: 'No Token Provided'})
    //verify token
    jwt.verify(token, config.secret, (err,user) => {
        if(err) return res.send({auth:false, token:'Invalid Token'})
        user.findById(user.id, (err,result) => {
            res.send(result)
        })
    })
})

module.exports = router;