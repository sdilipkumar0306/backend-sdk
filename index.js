import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.status(200).send("app running sucessfully"));
app.listen(port, () => console.log(`app running at http://localhost:${port}`));