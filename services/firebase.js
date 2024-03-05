const admin = require('firebase-admin')
const serviceAccount = require('../config/serviceAccountKey.json')

const init = () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  })
}

module.exports = {init,admin};