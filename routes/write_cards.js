var path = require("path");
var Data = require(path.resolve(path.dirname(__dirname), "routes/data_methods"));

module.exports = function(router) {
  router.post("/write_cards", function(req, res) {
    var cards = req.body.data;

    Data.setCards(cards);
    res.json(cards);
  });
};
