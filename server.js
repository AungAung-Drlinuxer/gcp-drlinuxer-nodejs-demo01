const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get("/", (req, res) => {
    return res.status(200).json({ message: "Cloud Run, Cloud Build, and Artifact Registry Demo - CI/CD Pipeline" });
});

app.get("/echo/:text", (req, res) => {
    const { text } = req.params;
    return res.status(200).json({ message: "Echo Route", data: text });
});
