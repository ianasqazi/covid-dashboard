const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes/index');


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const publicPath = path.join(__dirname,'client', 'public');
const buildPath = path.join(__dirname,'build', 'public');

// app.use(express.static(publicPath));
app.use('/', routes);
// app.use(express.static(path.join(__dirname, 'client/public')));
// app.get('/api/getList', (req,res) => {
//   var list = ["item1", "item2", "item3"];
//   res.json(list);
//   console.log('Sent list of items');
// });

// app.get('*', (req,res) =>{
//   res.sendFile(path.join(__dirname+'/client/public/index.html'));
// });

// app.use(function(req, res) {
//   if (process.env.NODE_ENV === 'production') {
//     console.log(buildPath);
//     // res.sendFile(path.join(__dirname, './client/build/index.html'));
//     res.sendFile(path.join(buildPath, 'index.html'));

//   } else {
//     // console.log(res);
//     // res.sendFile(path.join(__dirname, './client/public/index.html'));
//       res.sendFile(path.join(publicPath, 'index.html'));

//   }
// });


app.listen(port, () => 
  console.log(`Server running on port ${port}`)
);