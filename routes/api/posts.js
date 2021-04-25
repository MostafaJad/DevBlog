const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ message: "Post works" }));

module.exports = router;
