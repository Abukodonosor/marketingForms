const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../../dist")));
app.use(express.static(path.join(__dirname, "../../data")));

app.use(
  "/",
  express.static("./dist", {
    index: "index.html",
  })
);

app.get("/web-form/", (req, res) => {
  const queryParams = req.query;

  if (!queryParams.at || !queryParams.tm) {
    console.log("Invalid arguments!!!");
    return;
  }

  return res.sendFile(path.join(`${__dirname}/../../index.html`));
});

app.post("/form-submit", (req, res) => {});

app.get("/getWebFormData", (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../../data/webForm.json`));
});

app.get("/getWebFormField", (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../../data/webFormFields.json`));
});

app.post("/submit-app", (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.send({ status: "fail", message: "invalid params!" });
  }
  console.log(req.body);

  return res.send({ status: "success" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
