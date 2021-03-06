import express from "express";

const app = express();

const port = process.env.PORT || 8001;

app.get("/", (req, res) => res.status(200).send("app running sucessfully on port 8001"));
app.listen(port, () => console.log(`app running at http://localhost:${port}`));