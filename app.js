const express = require("express");
const moment = require("moment");
const app = express();
const date = moment().format("LLL");
const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => res.send("Hello World ===> " + date));

app.listen(PORT, () => {
  console.log("Server listening at Port:", PORT);
});
