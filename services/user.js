const { admin } = require('./firebase.js');

// Define service functions for updating the database
module.exports = {
    sync_user: async (email, Data) => {
        try {
            // Check if a user with the same email already exists
            const querySnapshot = await admin.firestore().collection('users').where('email', '==', email).get();

            let user;
            if (!querySnapshot.empty) {
                console.log('User with the same email already exists.');
                // If user already exists, fetch the first user document from the query snapshot
                user = querySnapshot.docs[0].data();
            } else {
                // If user does not exist, proceed to create the new user
                const newUserRef = await admin.firestore().collection('users').add({
                    email: email
                });

                // Fetch the newly created user document
                const newUserSnapshot = await newUserRef.get();
                user = newUserSnapshot.data();
            }

            console.log('User sync successfully:', user);
            return user;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
};
