import mongoose from "mongoose";

// make data schema & fix data type
const videoSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
    hashtags: [{ type: String }],
    meta: {
        views: Number,
        rating: Number,
    },
});

// make model
const Video = mongoose.model("Video", videoSchema);
export default Video;