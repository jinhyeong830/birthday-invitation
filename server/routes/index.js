const express = require("express");
const router = express.Router();

const controller = require("../controller/CInvitation");

router.all("/*", (req, res, next) => {
  res.header(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, PATCH, DELETE, OPTIONS"
  );
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

/**
 * @apirules
 *   각 DB 에 접근할 때의 라우터 주소는 DB 이름에 기반한다.
 *      - /party/info
 *      - /present/list
 */

/* party table 접근 */
router.get("/party", controller.get_partyInfo);
router.post("/party/detail", controller.post_partyInfo);
