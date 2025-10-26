const express = require('express');
const router = express.Router();

// Example GET route
router.get('/', (req, res) => {
  res.json({ success: true, message: 'Posts route working ✅' });
});

module.exports = router;
