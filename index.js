const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.type("html").send("Server del mio blog");
});

app.listen(port, () => {
    console.log(`App Express listening on port ${port}`);
});
