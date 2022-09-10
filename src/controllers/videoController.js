let videos = [
    {
        title: "First Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 1,
    },
    {
        title: "Second Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 1,
        id: 2,
    },
    {
        title: "Third Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 3,
    },
    ];

export const trending = (req, res) => res.render("home", { pageTitle: "Home", videos });

export const seeVideo = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};

export const editVideo = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
}

export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const video = videos[id - 1];
    video.title = title;
    return res.redirect(`/videos/${id}`);
}

export const uploadVideo = (req, res) => res.send("Upload Video");