var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();
const path = require('path')
const PORT = process.env.PORT || 3000


// template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./'))

app.get('/', (req, res) => {
  res.redirect('/todo');
});

//fire off controller
todoController(app);


app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

// if (module === require.main) {
//     // Start the server
//     const server = app.listen(config.get('PORT'), () => {
//       const port = server.address().port;
//       console.log(`App listening on port ${port}`);
//     });
//   }


