module.exports = function(application) {
  application.post('/chat', function(req, res) {
    application.app.controllers.chat.chat(application, req, res);
  });

  application.get('/chat', function(req, res) {
    application.app.controllers.chat.chat(application, req, res);
  });

}