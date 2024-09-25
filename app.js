const express = require("express");
const app = express();
const PORT = process.env.PORT || 8081;

app.get("/", (req, res) => res.send("Hello World and Hello Juinagar"));

app.listen(PORT, () => {
  console.log("Server listening at Port:", PORT);
});
