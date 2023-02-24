const express = require('express');
const router = express.Router();
const connectDB = require('../../config/dbconfing')

router.get('/getallcounties', (req, res) => { });
router.post('/', (req, res) => {
    console.log(req.body)

    const Mobileno = req.body.Mobileno;
    const Surname = req.body.Surname;
    const MiddleName = req.body.MiddleName;
    const LastName = req.body.LastName;
    const CityName = req.body.CityName;
    const NoofDay = req.body.NoofDay;

    const sqlInsert = "INSERT INTO `quick` (Mobileno , Surname, MiddleName, LastName, CityName, NoofDay ) VALUES (?,?,?,?,?,?)";
            connectDB.query(sqlInsert, [Mobileno, Surname, MiddleName, LastName, CityName, NoofDay], (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("Data succesfully Inserted");
                    console.log("Data Inserted", result.affectedRows);
                }
            });
});
router.post('/getalldistricts', (req, res) => { });
router.post('/getalldistaluka', (req, res) => { });
router.post('/getalltalvillage', (req, res) => { });

module.exports = router;