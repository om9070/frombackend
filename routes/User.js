const express = require("express");
const router = new express.Router();
const userController = require('../controllers/user')

router.post('/postFormData',userController.postFormData)
router.get('/getFormData',userController.getFormData)
router.get("/country",userController.country)

module.exports = router;

