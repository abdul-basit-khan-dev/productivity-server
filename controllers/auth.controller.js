const jwt = require('jsonwebtoken')

require('dotenv').config({ path: '.env.example' });

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const login =  (req, res) => {

    const {email, password} = req.body

    if (email == EMAIL && password == PASSWORD) {
        const token = jwt.sign({email}, process.env.TOKEN_KEY, {expiresIn: "2h"});
        
        return res.status(200).json({
            statusCode: 200,
            msg: "Login Successful",
            token,
        });
    }

    return res.status(401).json({
        statusCode: 401,
        msg: "Invalid Credentials"
    });
}


module.exports = { login };