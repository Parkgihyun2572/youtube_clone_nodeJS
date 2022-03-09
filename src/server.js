import express, { request, response } from "express";
import res from "express/lib/response";

const PORT = 4000;

const app = express();

const logger = (request, response, next) => {
    console.log(`${request.method} ${request.url}`);
    next();
}

const privateMiddleware = (request, response, next) => {
    const url = request.url;
    if (url === "/protected") {
        return response.send("<h1>Not Allowed</h1>")
    }
    console.log("Allowed, you may continue.");
    next();
}

const handleHome = (request, response, next) => {
    return response.end();
}

const handleProtected = (request, response) => {
    return response.send("Welcome to the private lounge!");
}

app.use(logger);
app.use(privateMiddleware);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handelListening = () => {
    console.log(`✔ Server Listening on port  http://localhost:${PORT}`);
}

app.listen(PORT, handelListening);