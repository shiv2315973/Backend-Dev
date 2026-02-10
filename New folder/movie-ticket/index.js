import express from "express";
import createUser from "./createUser.js";
import login from "./login.js";

const app = express();


app.use(express.json());


app.post("/register", createUser);
app.post("/login", login);

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});