var express = require('express');
var router = express.Router();
//var cors = require('cors');
//app.use(cors());

var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");


const User = require('../models/user');
const notesData = require('../models/notesData');


router.get("/getUsers" , (req, res, next) => {    //this get method will return all the data which is present
	console.log('getUsers --- Start 1');            // in the database
  User.find().then(documents => {
	  console.log('getUsers --- Start 2');
    res.json(
      documents
    );
	console.log('getUsers --- Start 3');
  });
});


router.get("/getNotes" , (req, res, next) => {    //this get method will return all the data which is present
	console.log('getUsers --- Start 1');            // in the database
  notesData.find().then(documents => {
	  console.log('getUsers --- Start 2');
    res.json(
      documents
    );
	console.log('getUsers --- Start 3');
  });
});


/*
router.post("/newNote", (req, res) => {
  console.log('**** addNote *** start ');
  let fetchedUser;
  notesData.findOne({ userName : req.body.userName })
  .then(user => {
  if (!user) {
  return res.status(401).json({
  message: "Auth failed"
  });
  }
  fetchedUser = user;
  return bcrypt.compare(req.body.password, user.password);
  })
  .then(result => {
  if (!result) {
  return res.status(401).json({
  message: "Auth failed"
  });
  }
  const token = jwt.sign(
  { email: fetchedUser.userName  },
  "secret_this_should_be_longer",
  { expiresIn: "5m" }
  );
  return  res.status(200).json({
  token: token,
  user : fetchedUser,
  expiresIn : 300
  /*,
  "expiresIn": 3600  
  });
  })
  .catch(err => {
  res.status(401).json({
  message: "Auth failed"
  });
  });
  });   */



router.post("/loginNew", (req, res) => {
  console.log('**** loginOne *** start ');
  let fetchedUser;
  User.findOne({ userName : req.body.userName })
  .then(user => {
  if (!user) {
  return res.status(401).json({
  message: "Auth failed"
  });
  }
  fetchedUser = user;
  return bcrypt.compare(req.body.password, user.password);
  })
  .then(result => {
  if (!result) {
  return res.status(401).json({
  message: "Auth failed"
  });
  }
  const token = jwt.sign(
  { email: fetchedUser.userName  },
  "secret_this_should_be_longer",
  { expiresIn: "5m" }
  );
  return  res.status(200).json({
  token: token,
  user : fetchedUser,
  expiresIn : 300
  /*,
  "expiresIn": 3600  */
  });
  })
  .catch(err => {
  res.status(401).json({
  message: "Auth failed"
  });
  });
  });

  router.delete("/:id", (req,res,next) => {     
    console.log(' delete 1 ' + req.params.id);
    /*
    bcrypt.hash(req.body.password, 10).
    then( 
    hash =>
    {
      console.log('hash : '+ hash);  */
      
      const note = new notesData({
        _id : req.body._id,
        userName: req.body.userName,
        notes: req.body.notes,
       
  
    });
    console.log(' delete occured.. 2 =  ' + note);
    note.deleteOne({_id :  req.params.id }).
    then (result => 
    {
      
      console.log('result : ' +result.toString());
      if(result.nModified > 0){
        
        console.log('delete --- Start 3');
        res.status(201).json({
                      message: "Post updated successfully",
                      result : result
                  });
  
      }
      else{
        console.log('Post --- Start 4');
        res.status(400).json({
                      message: "Post updated failed",
                      result : result
                  });
  
      }
    })
    .catch( err => { 
    
    console.log('Error occured.. '+ err);
    
    res.status(500).json({ error : err});
    
    });	
  });

  
router.put("/:id", (req,res,next) => {     
	console.log(' update 1 ' + req.body._id);
	/*
	bcrypt.hash(req.body.password, 10).
	then( 
	hash =>
	{
		console.log('hash : '+ hash);  */
		
    const note = new notesData({
      _id : req.body._id,
      userName: req.body.userName,
      notes: req.body.notes,
     

  });
  console.log(' occured.. 2 =  ' + note);
  notesData.deleteOne({_id :  req.params.id }).
  then (result => 
  {
    
    console.log('result : ' +result.toString());
    if(result.nModified > 0){
      
	    console.log('Post --- Start 3');
      res.status(201).json({
                    message: "Post updated successfully",
                    result : result
                });

    }
    else{
      console.log('Post --- Start 4');
      res.status(400).json({
                    message: "Post updated failed",
                    result : result
                });

    }
  })
  .catch( err => { 
  
	console.log('Error occured.. '+ err);
	
	res.status(500).json({ error : err});
  
  });	
});
	

  
   

router.post("/notes" , (req,res,next) => {     
  console.log(' notes occured.. 1');
 /* 
  bcrypt.hash(req.body.userName, 10).
  then( 
  hash =>
  {
    console.log('hash : '+ hash);
    */

    const note = new notesData({
      userName: req.body.userName,
      notes: req.body.notes,
     

  });
  console.log('notes occured.. 2');
  note.save().
  then (result => 
  {
      console.log(' notes Post --- Start 3');
    res.status(201).json({
                  message: " notes Post added successfully",
                  result : result
              });
  })
  .catch( err => { 
  
  console.log('notes Error occured.. '+ err);
  
  res.status(500).json({ error : err});
  
  });	
});
  

  

router.post("/signup" , (req,res,next) => {     
	console.log(' occured.. 1');
	
	bcrypt.hash(req.body.password, 10).
	then( 
	hash =>
	{
		console.log('hash : '+ hash);
		
		const user = new User({
			userName: req.body.userName,
			loginName: req.body.loginName,
			password: hash,
			email: req.body.email,
			userType: req.body.userType,
			contactNumber: req.body.contactNumber,
			address: req.body.address 
   
  });
  console.log(' occured.. 2');
  user.save().
  then (result => 
  {
	    console.log('Post --- Start 3');
		res.status(201).json({
									message: "Post added successfully",
									result : result
							});
  })
  .catch( err => { 
  
	console.log('Error occured.. '+ err);
	
	res.status(500).json({ error : err});
  
  });	
});
	
});



   
 
    module.exports = router;  
  