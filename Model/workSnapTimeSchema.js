import mongoose from "mongoose";


const WorksnapsTimeEntrySchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    timeEntries: {
        type: Object
    }
});

const worksnapstime = mongoose.model('WorksnapsTimeEntry', WorksnapsTimeEntrySchema);
export default worksnapstime
