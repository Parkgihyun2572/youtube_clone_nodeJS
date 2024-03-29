import express from "express";
import { editVideo, postEdit, seeVideo, getUploadVideo, postUploadVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", seeVideo);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(editVideo).post(postEdit);
videoRouter.route("/upload").get(getUploadVideo).post(postUploadVideo);

export default videoRouter;