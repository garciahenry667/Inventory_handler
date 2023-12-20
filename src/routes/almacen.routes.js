import {itemRegitrationForm} from "../controllers/form.js"
import { Router } from "express"


const router = Router()

router.get("/insert", itemRegitrationForm)

export default router;