import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (request, response) => {
    return response.end();
}

app.get("/", handleHome);

const handelListening = () => {
    console.log(`Server Listening on port  http://localhost:${PORT}`);
}

app.listen(PORT, handelListening);