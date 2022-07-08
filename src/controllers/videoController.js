export const trending = (req, res) => res.render("home");
export const search = (req, res) => res.send("Search Video");

export const uploadVideo = (req, res) => res.send("Upload Video");
export const seeVideo = (req, res) => res.render("watch");
export const editVideo = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
