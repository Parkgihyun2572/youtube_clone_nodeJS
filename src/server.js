import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

// set express settings
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

// set middlewares
app.use(logger);
app.use(express.urlencoded({ extended: true }));

// connect routers
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => {
    console.log(`✔ Server Listening on port  http://localhost:${PORT}`);
}

app.listen(PORT, handleListening);