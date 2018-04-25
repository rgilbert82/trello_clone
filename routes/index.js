var path = require("path");
var Data = require(path.resolve(path.dirname(__dirname), "routes/data_methods"));

/* GET home page. */

module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', {
      user: Data.getUser(),
      cards: Data.getCards(),
      lists: Data.getLists(),
      boards: Data.getBoards()
     });
  });
};
