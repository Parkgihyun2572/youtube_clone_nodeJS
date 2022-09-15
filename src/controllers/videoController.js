export const home = (req, res) => res.render("home", { pageTitle: "Home"});

export const seeVideo = (req, res) => {
    const { id } = req.params;
    return res.render("watch", { pageTitle: `Watching`});
};

export const editVideo = (req, res) => {
    const { id } = req.params;
    res.render("edit", { pageTitle: `Editing`});
}

export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
}

export const getUploadVideo = (req, res) => {
    res.render("upload", { pageTitle: "Upload Video" });
}

export const postUploadVideo = (req, res) => {
    const { title } = req.body;
    return res.redirect("/");
}