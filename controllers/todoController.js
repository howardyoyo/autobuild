//manipulate data, handle routes

var bodyParser = require('body-parser');

var data = [{item: 'Prepare for interview'}, {item: 'Travel to interview'}, {item: 'Panic'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});
//middleware that will be run in below POST request

module.exports = function(app) {
    app.get('/todo', function(req, res) {
        res.render('todo', {todos: data});
    });

    app.post('/todo', urlencodedParser, function(req, res) {
        data.push(req.body);
        res.render('todo', {todos: data});
        res.json(data); 
    });



};