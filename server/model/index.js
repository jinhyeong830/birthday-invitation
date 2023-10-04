// DB 연결 파일 따로
const client = require("./mongoConnect");

const db = {};

db.Party = require("./Party");
db.Present = require("./Present");

module.exports = db;
