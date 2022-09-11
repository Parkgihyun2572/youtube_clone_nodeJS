import mongoose from "mongoose";

const MONGODB_URL = "mongodb://127.0.0.1:27017";
const db = mongoose.connection;

mongoose.connet(`${MONGODB_URL}/youtubeclone`);

const handleError = (error) => console.log("DB Error", error);
const handleOpen = () => console.log("Connected to DB");

//check DB connection condition
db.on("error", handleError);
db.once("open", handleOpen);