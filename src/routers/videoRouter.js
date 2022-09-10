import express from "express";
import { editVideo, postEdit, seeVideo, getUploadVideo, postUploadVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", seeVideo);
videoRouter.route("/:id(\\d+)/edit").get(editVideo).post(postEdit);
videoRouter.route("/upload").get(getUploadVideo).post(postUploadVideo);

export default videoRouter;