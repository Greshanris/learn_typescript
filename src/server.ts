import express from "express";

// now, lets's make a sample server
const app = express();

app.get("/", (req, res) => {
    res.send("API is working!");
});

app.listen(4000, () => {
    console.log("Server is running")
})