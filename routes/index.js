const path = require('path');
const router = require('express').Router();

const publicPath = path.join(__dirname,'..', 'client', 'public');

// API Routes
// router.use('/api/v1/users', routes);

router.use('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  } else {
    console.log('hit');
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
  }
});

module.exports = router;
