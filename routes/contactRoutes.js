const express = require("express");
const { addContactRecord } = require("../controllers/contactController");
const router = express.Router();

router.post("/contact", addContactRecord);

module.exports = router;
