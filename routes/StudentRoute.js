import express from "express"
import studentTimeEntries from "../controller/studentTimeController.js"


const router = express.Router()


router.post("/create" , studentTimeEntries.creatStudent)
router.post("/timeEntries" , studentTimeEntries.studentTime)
router.get("/allTimeEntries" , studentTimeEntries.getStudentsWithTimeEntries)

export default router