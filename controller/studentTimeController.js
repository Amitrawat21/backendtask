
import Student from "../Model/studentSchems.js"
import worksnapstime from "../Model/workSnapTimeSchema.js";



class studentTimeEntries{

    constructor(){

    }

    static  creatStudent = async(req , res)=>{
        const { firstName, lastName, displayName, municipality } = req.body;

        const newStudent = new Student({
            firstName,
            lastName,
            displayName,
            municipality
        });
    
        try {
            const savedStudent = await newStudent.save();
            res.status(200).json(savedStudent);
        } catch (err) {
            res.status(500).json({ error: 'Failed to save student details' });
        }

    }

    static studentTime = async(req  , res)=>{
        const {student ,  timeEntries } = req.body

        const newTimeEntries = new worksnapstime({
          student,
          timeEntries
        });

        try {
            const savedTimeEntries = await newTimeEntries.save();
            res.status(200).json(savedTimeEntries);
        } catch (err) {
            res.status(500).json({ error: 'Failed to save student timeEntriess' });
        }

    }

    static getStudentsWithTimeEntries = async(req , res)=>{
        try {
            const students = await Student.find();
          
    
            for (let student of students) {
                const TimeEntries = await worksnapstime.findOne({ student: student._id });
               
                console.log('Time Entries:', TimeEntries.timeEntries);
            }
        } catch (err) {
            console.error('Error fetching students and time entries:', err);
        }
    }

    }


    export default studentTimeEntries
