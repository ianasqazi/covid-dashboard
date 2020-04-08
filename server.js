const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes/index');


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const publicPath = path.join(__dirname,'client', 'public');
const buildPath = path.join(__dirname,'build', 'public');

// app.use(express.static(publicPath));
// app.use('/', routes);

app.use(function(req, res) {
  if (process.env.NODE_ENV === 'production') {
    // res.sendFile(path.join(__dirname, './client/build/index.html'));
    res.sendFile(path.join(buildPath, 'index.html'));

  } else {
    // console.log('hit');
    // res.sendFile(path.join(__dirname, './client/public/index.html'));
      res.sendFile(path.join(publicPath, 'index.html'));

  }
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(publicPath, 'index.html'));
// });

// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'client/build')));
    
//   // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//   });
// }

app.listen(port, () => 
  console.log(`Server running on port ${port}`)
);