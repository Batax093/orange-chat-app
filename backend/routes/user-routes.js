import express from 'express'
import { getUser } from '../controllers/user-controllers.js'
import protectRoute from '../middleware/protect-routes.js'

const router = express.Router()

router.get('/', protectRoute, getUser)

export default router