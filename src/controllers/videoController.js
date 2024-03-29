import Video from "../models/video";

export const home = async (req, res) => {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", videos });
};

export const seeVideo = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id);
    if (video) {
        return res.render("watch", { pageTitle: video.title, video});
    }
    return res.render("404", { pageTitle: "Video not found" })
};

export const editVideo = (req, res) => {
    const { id } = req.params;
    res.render("edit", { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
};

export const getUploadVideo = (req, res) => {
    res.render("upload", { pageTitle: "Upload Video" });
};

export const postUploadVideo = async (req, res) => {
    const { title, description, hashtags } = req.body;
    try {
        await Video.create({
            title,
            description,
            hashtags: hashtags.split(",").map((word) => `#${word}`),
        })
        return res.redirect("/");
    } catch(error) {
        return res.render("upload", {
            pageTitle: "Upload Video",
            errorMessage: error._message,
        });
    }
};