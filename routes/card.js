var path = require("path");
var Data = require(path.resolve(path.dirname(__dirname), "routes/data_methods"));

module.exports = function(router) {
  router.get('/cards/:id', function(req, res, next) {
    res.render('card', {
      user: Data.getUser(),
      cards: Data.getCards(),
      lists: Data.getLists(),
      boards: Data.getBoards()
     });
  });
};
