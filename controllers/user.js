// Import userService to handle business logic
const UserService = require('../services/user');

// Define controller functions for handling requests and responses
module.exports = {
  sync_user: async (req, res) => {
   
    const email = req.body.authenticateResponse.username;
    const data = req.body; // Assuming the new data is passed in the request body
    try {
      const user = await UserService.sync_user(email, data);
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
 
};
