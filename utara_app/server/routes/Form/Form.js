const express = require('express');
const router = express.Router();
const connectDB = require('../../config/dbconfing');

router.post('/',  (req,res)=>{
    console.log(req.body)
   
    const Building = req.body.Building;
    const Floor = req.body.Floor;
    const Room = req.body.Room;
    const Name = req.body.Name;
    const Type = req.body.Type;
    const Seti = req.body.Seti;
    const FloorBed = req.body.FloorBed;
    const Bathroom = req.body.Bathroom;
    const ac = req.body.ac;
   
      
   
       const sqlInsert = "INSERT INTO form (`Building`,`Floor`,`Room`,`Name`,`Type`,`Seti`,`FloorBed`,`Bathroom`,`ac`) VALUES (?,?,?,?,?,?,?,?,?)"; 
    
       connectDB.query(sqlInsert,[Building,Floor,Room,Name,Type,Seti,FloorBed,Bathroom,ac],(err,result)=>{
           if(err){
               console.log(err);  
           }else{
           res.send("values inserted");
           }
       });
   });
   
   
   module.exports = router;