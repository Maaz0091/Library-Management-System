const express = require("express");
const router = express.Router();

// Example GET route
router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" }
  ]);
});

module.exports = router;
