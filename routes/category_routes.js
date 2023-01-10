import express from 'express'
import { CategoryModel } from '../db.js'

const router = express.Router()

router.get('/', async (req, res) => res.send(await CategoryModel.find()))


export default router