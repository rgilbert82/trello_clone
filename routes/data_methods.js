var path = require("path");
var fs = require('fs');
var file_path = path.resolve(path.dirname(__dirname), "data");

var Data = {
  getUser: function() {
    return JSON.parse(fs.readFileSync(file_path + "/user.json", "utf-8"));
  },
  getBoards: function() {
    return JSON.parse(fs.readFileSync(file_path + "/boards.json", "utf-8"));
  },
  getLists: function() {
    return JSON.parse(fs.readFileSync(file_path + "/lists.json", "utf-8"));
  },
  getCards: function() {
    return JSON.parse(fs.readFileSync(file_path + "/cards.json", "utf-8"));
  },
  setBoards: function(boards) {
    var boards_path = file_path + "/boards.json";
    fs.writeFileSync(boards_path, boards, "utf-8");
  },
  setLists: function(lists) {
    var lists_path = file_path + "/lists.json";
    fs.writeFileSync(lists_path, lists, "utf-8");
  },
  setCards: function(cards) {
    var cards_path = file_path + "/cards.json";
    fs.writeFileSync(cards_path, cards, "utf-8");
  }
};

module.exports = Data;
