const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const multer = require("multer");
const { mP } = require("./merge");

const upload = multer({ dest: "uploads/" });
app.use("/static", express.static("public"));
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

app.post("/merge", upload.array("pdf", 2), async (req, res, next) => {
  console.log(req.files);
  let d = await mP(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );
  res.redirect(`http://localhost:3000/static/${d}.pdf`);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
