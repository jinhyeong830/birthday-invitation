const express = require("express");
const cors = require("cors");
require("dotenv").config;
const PORT = 8000;
const app = express();

// react node 연동
// https://codingapple.com/unit/nodejs-react-integration/
// https://velog.io/@autumndr3ams/210802-React-Node.jsexpress-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const dataRouter = require("./routes/data");
app.use("/data", dataRouter);
app.listen(PORT, () => {
  console.log("port open:", PORT);
});
