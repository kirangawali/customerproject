var express = require('express');
var app = express();
//var cors = require('cors');
var userData = require('./routes/app');
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const bodyParser = require("body-parser");
//app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log('request recived');
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH,PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/api/employee',userData);
//app.use(express.json());

app.post('/app' , function(req ,res){
    console.log("Data : :" + req.body.userName);
    res.send("data recived by server");
});



app.get("/vaishali", (req, res, next) => {
    console.log('some value');
  res.send('welcome students..');
  
});





mongoose
  .connect(
    'mongodb+srv://vaishali:vaishali@cluster0-8kvsn.mongodb.net/node-angular?retryWrites=true&w=majority'
	, {useUnifiedTopology: true, 
   useNewUrlParser: true} 
  )
  .then(() => {
    console.log("Connected to database!");
	
  })
  .catch((err) => {
    console.log("Connection failed!"+err);
  }); 

  
app.listen(3000 , ()=>{
    console.log('server running at port 3000 ....');
});


