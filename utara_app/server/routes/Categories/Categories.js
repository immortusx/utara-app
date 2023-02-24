const express = require('express');
const router = express.Router();
const connectDB = require('../../config/dbconfing')

router.get('/getallcounties', (req,res)=>{});
router.post('/',  (req,res)=>{
    console.log(req.body)

    const Textbox    = req.body.Textbox;
  

    const sqlInsert = "INSERT INTO `Categories` (Product_Name ) VALUES (?)"; 
    connectDB.query(sqlInsert,[Textbox],(err,result)=>{
        if(err){
            console.log(err);  
        }else{
        res.send("values inserted");
        }
    });
});
router.post('/getalldistricts', (req,res)=>{});
router.post('/getalldistaluka', (req,res)=>{});
router.post('/getalltalvillage', (req,res)=>{});

module.exports = router;