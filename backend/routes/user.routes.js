import express from 'express';
import { createUser } from '../controllers/user.api.js'; // Import the createUser function from the controller

const router = express.Router();

// express.Router() creates a router object that acts like a mini Express app. It has its own set of middleware and routing methods (.get(), .post(), .put(), .delete(), etc.).


// Route to create a new user
router.post('/create', createUser);

export default router;