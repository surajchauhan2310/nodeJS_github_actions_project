const express = require("express");
const moment = require("moment-timezone"); // Import moment-timezone
const app = express();
const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => {
  // Set the time zone to Indian Standard Time
  const dateTime = moment().tz("Asia/Kolkata").format("LLL");
  // Send response with current date and time in IST
  res
    .status(200)
    .send(
      "Hello Mumbai!!! ===> " +
        dateTime +
        "<br>Application is running on port " +
        PORT
    );
});

app.listen(PORT, () => {
  console.log("Server listening at Port:", PORT);
});
