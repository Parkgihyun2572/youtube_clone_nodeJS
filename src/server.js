import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");

// set express settings
app.set("view engine", "pug"); // setting for view engine
app.set("views", process.cwd() + "/src/views"); // setting for understanding HTML form

// set middlewares
app.use(logger);
app.use(express.urlencoded({ extended: true }));

// connect routers
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;