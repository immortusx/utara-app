const express = require("express");
const router = express.Router();
const connectDB = require("../../config/dbconfing");
const multer = require("multer");
const path = require("path");
const { diskStorage } = require("multer");
const { appendFile } = require("fs");

app.use('/upload',express.static('upload'))


const storage = multer.diskStorage({
  destination: "./upload",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage: storage });

router.get("/getallcounties", (req, res) => {});
router.post("/", upload.single("Upload"), (req, res) => {
  console.log("req.body", req.body);
  console.log("req.file", req.file);

  const FirstName = req.body.FirstName;
  const MiddleName = req.body.MiddleName;
  const LastName = req.body.LastName;
  const Email = req.body.Email;
  const Address= req.body.Address;
  const Mobileno = req.body.Mobileno;
  const Upload= req.file.filename;

   const sqlInsert = "INSERT INTO user ( `Firstname`, `MiddleName`, `LastName`, `Email`, `Address`, `Mobileno`, `Upload` ) VALUES (?,?,?,?,?,?,?)";
      connectDB.query(sqlInsert,[FirstName, MiddleName, LastName, Email, Address, Mobileno, Upload],(err,result)=>{
          if(err){
              console.log(err);
          }else{
          res.send("values inserted");
          }
      });
});
router.post("/getalldistricts", (req, res) => {});
router.post("/getalldistaluka", (req, res) => {});
router.post("/getalltalvillage", (req, res) => {});

module.exports = router;
