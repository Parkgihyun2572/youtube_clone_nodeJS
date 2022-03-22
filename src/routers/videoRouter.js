import express from "express";
import { uploadVideo, editVideo, seeVideo, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:id(\\d+)", seeVideo);
videoRouter.get("/:id(\\d+)/edit", editVideo);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;