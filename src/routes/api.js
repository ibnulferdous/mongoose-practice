const express = require("express");
const router = express.Router();
const HelloController = require("../controllers/HelloController");

// This is my first get routing
router.get("/hello-get", HelloController.HelloGet);

router.post("/hello-post", HelloController.HelloPost);

module.exports = router;
