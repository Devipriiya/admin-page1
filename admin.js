import express from "express";
import connectDB from "./admindb.js";
import students from "./students.js";
import teachers from "./teachers.js";
import library from "./library.js";
import timetable from "./timetable.js";
import upcommingexams from "./upcommingexams.js";
import gallery from "./gallery.js";
import event from "./event.js";
import bustrack from "./bustrack.js";
import trackbus from "./trackbus.js";
import attendance from "./attendance.js";
import schedule from "./schedule.js";
import examresult from "./examresult.js";
connectDB();
const app=express();
app.use(express.json());
app.use('/students',students);
app.use('/teachers',teachers);
app.use('/library',library);
app.use('/timetable',timetable);
app.use('/upcommingexams',upcommingexams);
app.use('/gallery',gallery);
app.use('/event',event);
app.use('/bustrack',bustrack);
app.use('/trackbus',trackbus);
app.use('/attendance',attendance);
app.use('/schedule',schedule);
app.use('/examresult',examresult);

const port=5000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
 
});
