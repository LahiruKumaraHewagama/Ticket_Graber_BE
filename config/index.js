/**
 * Config
 */

const dotenv = require('dotenv');
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

module.exports = {
  port: process.env.PORT,
  client_url: process.env.CLIENT_URL
}
