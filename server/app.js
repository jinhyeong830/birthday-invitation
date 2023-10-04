const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

const PORT = 8000;
// react node 연동
// https://codingapple.com/unit/nodejs-react-integration/
// https://velog.io/@autumndr3ams/210802-React-Node.jsexpress-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 열리는지 테스트용
const dataRouter = require("./routes/data");
app.use("/data", dataRouter);

// api 연결 라우터
const router = require("./routes");
app.use("/api_server", router);

app.listen(PORT, () => {
  console.log("port open:", PORT);
});
