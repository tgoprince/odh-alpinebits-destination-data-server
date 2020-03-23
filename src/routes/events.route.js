const connector = require ('../connectors');
const errors = require('../errors');
const { parseCollectionRequest, parseResourceRequest } = require('./request-parser');

module.exports = function(app) {
  app.get('/1.0/events', function(req, res) {
    connector.getEvents(parseCollectionRequest(req))
      .then(data => res.json(data))
      .catch(error => errors.handleError(error, req, res));
  });

  app.get('/1.0/events/:id', function(req, res) {
    connector.getEventById(parseResourceRequest(req))
      .then(data => res.json(data))
      .catch(error => errors.handleError(error, req, res));
  });
  
  app.get('/1.0/events/:id/contributors', function(req, res) {
    errors.handleNotImplemented(req,res);
  });
  
  app.get('/1.0/events/:id/multimediaDescriptions', function(req, res) {
    connector.getEventMedia(parseResourceRequest(req))
      .then(data => res.json(data))
      .catch(error => errors.handleError(error, req, res));
  });

  app.get('/1.0/events/:id/organizers', function(req, res) {
    connector.getEventOrganizers(parseResourceRequest(req))
      .then(data => res.json(data))
      .catch(error => errors.handleError(error, req, res));
  });

  app.get('/1.0/events/:id/publisher', function(req, res) {
    connector.getEventPublisher(parseResourceRequest(req))
      .then(data => res.json(data))
      .catch(error => errors.handleError(error, req, res));
  });

  app.get('/1.0/events/:id/series', function(req, res) {
    errors.handleNotImplemented(req,res);
  });

  app.get('/1.0/events/:id/sponsors', function(req, res) {
    errors.handleNotImplemented(req,res);
  });

  app.get('/1.0/events/:id/subEvents', function(req, res) {
    errors.handleNotImplemented(req,res);
  });

  app.get('/1.0/events/:id/venues', function(req, res) {
    connector.getEventVenues(parseResourceRequest(req))
      .then(data => res.json(data))
      .catch(error => errors.handleError(error, req, res));
  });
}
