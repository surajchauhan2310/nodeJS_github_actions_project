const express = require("express");
const moment = require("moment");
const app = express();
const date = moment().format("LL");
const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => res.send("Hello World and Hello Juinagar", date));

app.listen(PORT, () => {
  console.log("Server listening at Port:", PORT);
});
