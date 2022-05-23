const express = require('express')
const router = express.Router()

const collegeController = require('./../controllers/collegeController')


router.route('/getColleges').get(collegeController.getData)
router.route('/addCollege').post(collegeController.checkBody,collegeController.postData)


module.exports = router;

