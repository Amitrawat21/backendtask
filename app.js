import express from "express";
import "./database/Connection.js"
import studentrouter from "./routes/StudentRoute.js"
const app = express();
const port = 8000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/student", studentrouter);




app.listen(port, () => {
    console.log(`port is running on ${port}`);
  });
  