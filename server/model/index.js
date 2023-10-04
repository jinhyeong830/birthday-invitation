// const mongoose = require("mongoose");
// mongoose
//     .connect(
//         `mongodb+srv://${process.env.DB_MONGO_USER}:${process.env.DB_MONGO_PASSWORD}@${process.env.DB_MONGO_CLUSTER}.0q2wiuh.mongodb.net/?retryWrites=true&w=majority`,
//         { dbName: process.env.DB_MONGO_NAME }
//     )
//     .then(() => console.log("MongoDB connected"))
//     .catch((err) => {
//         console.log(err);
//     });
// DB 연결 파일 따로 실행
const client = require("./mongoConnect");

const db = {};

db.Party = require("./Party");
db.Present = require("./Present");

module.exports = db;
