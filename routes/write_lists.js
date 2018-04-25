var path = require("path");
var Data = require(path.resolve(path.dirname(__dirname), "routes/data_methods"));

module.exports = function(router) {
  router.post("/write_lists", function(req, res) {
    var lists = req.body.data;

    Data.setLists(lists);
    res.json(lists);
  });
};
