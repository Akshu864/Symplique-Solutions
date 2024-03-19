const express=require('express')
const remindController=require('../controller/RemindController')
const router=express()

router.post('/create',remindController.createReminder)

module.exports=router;