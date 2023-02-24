const express = require('express');
const router = express.Router();

router.get('/getallcounties', (req,res)=>{});
router.post('/getallstates',  (req,res)=>{});
router.post('/getalldistricts', (req,res)=>{});
router.post('/getalldistaluka', (req,res)=>{});
router.post('/getalltalvillage', (req,res)=>{});

module.exports = router;