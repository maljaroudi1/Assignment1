var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('home', { title: 'Express' });
});

/* GET About page. */
router.get('/about', function (req, res) {
  res.render('about', { title: 'About' });
});

/* GET Contact page. */
router.get('/contact', function (req, res) {
  res.render('contact', { title: 'Contact' });
});

/* GET Projects page. */
router.get('/projects', function (req, res) {
  res.render('projects', { title: 'Project' });
});

router.get('/services', (req, res) => {
  res.render('services', { title: 'Services' });
});

module.exports = router;