import User from '../models/user.model.js';

// Create a new user
export const createUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }
        const user = new User({
            name,
            email,
            password,
            confirmPassword
        });
        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (err) {
        res.status(500).json({ message: 'Error creating user', err });
    }
}