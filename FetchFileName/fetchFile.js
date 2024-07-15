

import fs from "fs";
import path from "path";

const directoryPath = path.join(__dirname, '../upload'); 
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        console.log(file);
    });
});



