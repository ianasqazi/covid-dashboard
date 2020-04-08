const express = require('express');

const path = require('path');
const publicPath = path.join(__dirname, 'public');

const app = express();



const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

 app.listen(PORT, () => {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
 });

 
