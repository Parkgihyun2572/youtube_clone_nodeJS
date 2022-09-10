import express from "express";
import { uploadVideo, editVideo, postEdit, seeVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:id(\\d+)", seeVideo);
videoRouter.route("/:id(\\d+)/edit").get(editVideo).post(postEdit);

export default videoRouter;