const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const empInfo = {
    name: "Abdul Basit"
  };
  res.render("welcome", { empInfo });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
