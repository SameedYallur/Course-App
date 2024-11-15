const express = require("express");
const router = express.Router();
const { getAllCourses, getCourse, createCourse, editCourse, deleteCourse } = require('../controllers/courseController');
const auth = require('../middlewares/auth');

router.get("/courses", getAllCourses);  
router.get("/course/:id", getCourse);  
router.post("/courses", auth, createCourse);  
router.put("/courses/:id", auth, editCourse);  
router.delete("/courses/:id", auth, deleteCourse); 

module.exports = router;
