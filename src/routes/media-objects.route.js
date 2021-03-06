const errors = require('../errors');

module.exports = function(app) {
  app.get('/1.0/mediaObjects', function(req, res) {
    errors.handleNotImplemented(req,res);
  });

  app.get('/1.0/mediaObjects/:id', function(req, res) {
    errors.handleNotImplemented(req,res);
  });

  app.get('/1.0/mediaObjects/:id/copyrightOwner', function(req, res) {
    errors.handleNotImplemented(req,res);
  });
}
