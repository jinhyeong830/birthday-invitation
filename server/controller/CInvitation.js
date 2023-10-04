const { Party, Present } = require("../model");

// 생일자 정보 보내기
exports.post_partyInfo = async (req, res) => {
  const data = req.body;
  console.log(data.name, data.place, data.date);
};

// 생일자 정보 가져오기
exports.get_partyInfo = async (req, res) => {};
