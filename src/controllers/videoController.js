export const trending = (req, res) => res.send("Home Page Videos");
export const search = (req, res) => res.send("Search Video");

export const uploadVideo = (req, res) => res.send("Upload Video");
export const seeVideo = (req, res) => {
    console.log(req.params);
    res.send("Watch Video");
}
export const editVideo = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
