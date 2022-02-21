import express, { request, response } from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (request, response, next) => {
    console.log("I'm in the middle!");
    next();
}

const handleHome = (request, response, next) => {
    return response.end();
}

app.get("/", gossipMiddleware, handleHome);

const handelListening = () => {
    console.log(`✔ Server Listening on port  http://localhost:${PORT}`);
}

app.listen(PORT, handelListening);