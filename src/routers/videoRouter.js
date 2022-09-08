import express from "express";
import { uploadVideo, editVideo, postEdit, seeVideo, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:id(\\d+)", seeVideo);
videoRouter.route("/:id(\\d+)/edit").get(editVideo).post(postEdit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;