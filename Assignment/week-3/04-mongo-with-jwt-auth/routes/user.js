const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  //check if the user with this username already exists
  await User.create({
    username: username,
    password: password,
  });
  res.json({ mesage: "User created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.find({
    username,
    password,
  });

  if (user) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.json({ token });
  } else {
    res.status(411).json({ message: "Incorrect email and password" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const allCourses = await Course.find({});
  res.json({ courses: allCourses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.username; //GEtting this value form user middle ware
  console.log(username);

  try {
    await User.updateOne(
      {
        username: username,
      },
      {
        // prettier-ignore
        "$push": { purchasedCourses: courseId },
      }
    );
  } catch (e) {
    console.log(e);
  }
  res.json({ message: "Purchase Complete" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.username,
  });
  // console.log(user.purchasedCourses);
  const courses = await Course.find({
    _id: {
      // prettier-ignore
      "$in":user.purchasedCourses,
    },
  });
  res.json({
    courses: courses,
  });
});

module.exports = router;
