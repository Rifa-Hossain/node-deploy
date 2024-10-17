//const index = fs.readFileSync('index.html','utf-8');

require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const server = express();
const prouter = require('./routes/product');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');



//console.log('env',process.env.DB_PASSWORD);

//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//qItnBDcBK8kDrdtz

//bodyParser
server.use(cors());
server.use(express.json());

server.use(morgan('dev'));

server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));

server.use('/products',prouter.router);

server.use('*',(req,res)=>{
   res.sendFile(path.resolve(__dirname,'build/index.html'));
});

//C R U D

server.listen(process.env.PORT,()=>{
    console.log('server started');
});


//application level middleware
// server.use((req,res,next)=>{
//     console.log(req.get('User-Agent'),req.method,new Date(), req.ip, req.hostname);
//     next();
// });


// const auth = ((req,res,next)=>{
//     if(req.body.password === '123')
//     {
//         next();
//     } else {
//         res.sendStatus(401);
//     }
    
// });

// server.use(auth);