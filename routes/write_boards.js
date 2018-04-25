var path = require("path");
var Data = require(path.resolve(path.dirname(__dirname), "routes/data_methods"));

module.exports = function(router) {
  router.post("/write_boards", function(req, res) {
    var boards = req.body.data;

    Data.setBoards(boards);
    res.json(boards);
  });
};
