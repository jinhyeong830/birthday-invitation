const { Party, Present } = require("../model");

//  DB test 용 함수 > 나중에 지울 것
function test() {
  const insertData = {
    userName: "test",
    partyDate: "2024-01-13",
    place: "test place",
  };
  const party = new Party(insertData);
  try {
    party.save();
    // res.send(insertData);
    console.log(party);
  } catch (err) {
    console.log(err);
  }
}
test();
console.log(Party);
console.log("~~");
// 생일자 정보 보내기
exports.post_partyInfo = async (req, res) => {
  const data = req.body;
  console.log(data.name, data.place, data.date);
};

// 생일자 정보 가져오기
exports.get_partyInfo = async (req, res) => {};
