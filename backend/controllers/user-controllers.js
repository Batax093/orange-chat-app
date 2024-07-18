import User from '../models/user-models.js';

export const getUser = async (req, res) => {
    try {
        const loggedInUser = req.user._id;
        const allusers = await User.find({ _id: { $ne: loggedInUser } }).select('-password');

        res.status(200).json(allusers);
    } catch (error) {
        console.log("Error in getUser controller:", error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
