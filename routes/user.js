// userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

// Define routes for user-related endpoints
router.post('/sync_user', UserController.sync_user);

module.exports = router;
