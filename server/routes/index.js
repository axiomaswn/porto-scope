var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/skills', function (req, res) {
  res.json(['Earth', 'Wind', 'Fire', 'Water'])
})

router.get('/meals', function (req, res) {
  res.json(['Soto', 'Sate', 'Martabak', 'Rendang'])
})

module.exports = router
