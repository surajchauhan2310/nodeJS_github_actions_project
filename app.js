const express = require("express");
const moment = require("moment");
const app = express();
const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => {
  dateTime = moment().format("LLL");
  res.send("Hello World & Hello Sanpada!!! ==> " + dateTime);
});

app.listen(PORT, () => {
  console.log("Server listening at Port:", PORT);
});
