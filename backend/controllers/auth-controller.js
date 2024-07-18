import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from '../utils/generateToken.js'
import User from '../models/user-models.js'

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body

        if (password != confirmPassword) {
            return res.status(404).json({ message: 'Passwords do not match' })
        }
        const user = await User.findOne({where : {username}})

        if (user) {
            return req.status(404).json({ message: 'User already exists' })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const boyProfilePicts = `https://avatar.iran.liara.run/public/boy?${username}`
        const girlProfilePicts = `https://avatar.iran.liara.run/public/girl?${username}`

        const newUser = new User({
            fullName,
            username,
            password : hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePicts : girlProfilePicts
        })

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res)
            await newUser.save()

            res.status(201).json({
                _id : newUser._id,
                fullName : newUser.fullName,
                profilePic : newUser.profilePic
            })
        } else {
            res.status(400).json({ error : "Invalid User Data"})
        }

    } catch (err) {
        console.log("Error signup controller", err.message)
        res.status(505).json({ error : "Internal Server Error"})
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({username})
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || '')
        
        if ( !username || !isPasswordCorrect ) {
            return res.status(404).json({ message: 'Invalid Credentials' })
        }

        generateTokenAndSetCookie(user._id, res)

        res.status(201).json({
            _id : user._id,
            fullName : user.fullName,
            username : user.username,
            profilePic : user.profilePic
        })
    } catch (err) {
        console.log("Error login controller", err.message)
        res.status(505).json({ error : "Internal Server Error"})
    }
}

export const logout =  (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge : 0 })
        res.status(201).json({ message: "Logout successful" })
    } catch (err) {
        console.log("Error logout controller", err.message)
        res.status(505).json({ error : "Internal Server Error"})
    }
}