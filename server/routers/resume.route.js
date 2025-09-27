import express from "express"
import { createResume, getIdResume, getResume, updateResume } from "../controllers/resume.controller.js"

const route = express.Router()

route.post("/createResume",createResume)
route.get("/getResume",getResume)
route.get("/getIdResume:id",getIdResume)
route.put("/updateResume:id",updateResume)

export default route