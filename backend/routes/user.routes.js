import express from 'express';
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/user.api.js'; // Import the createUser function from the controller

const router = express.Router();

// express.Router() creates a router object that acts like a mini Express app. It has its own set of middleware and routing methods (.get(), .post(), .put(), .delete(), etc.).


// Route to create a new user
router.post('/create', createUser);
// The createUser function is called when a POST request is made to the /create endpoint.


// Route to delete a user by ID
router.delete('/deleteUser/:id', deleteUser);
// The deleteUser function is called when a DELETE request is made to the /deleteUser/:id endpoint.


// Route to get all users
router.get('/users/', getAllUsers);
// The getAllUsers function is called when a GET request is made to the /users/ endpoint.


// Route to get one user by ID
router.get('/users/:id', getUserById);
// The getUserById function is called when a GET request is made to the /users/:id endpoint.


// Route to update a user by ID
router.put('/updateUser/:id', updateUser);
// The updateUser function is called when a PUT request is made to the /updateUser/:id endpoint.


export default router;