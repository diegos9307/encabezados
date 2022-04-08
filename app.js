const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log(res);
  res.send(`<h1>${req.header("User-Agent")}</h1>`);
});

app.listen(3000, () => console.log("running in port 3000"));
