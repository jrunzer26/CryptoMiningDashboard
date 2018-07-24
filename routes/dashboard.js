var express = require('express');
var router = express.Router();
var Promise = require('bluebird');
const save = require('save-file');
var read = require('read-directory');
var readfiles = require('node-readfiles');
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard' });
});

router.post('/status-update', function(req, res, next) {
  console.log(req.body.data);
  save(req.body.data, '../rig-status/'+req.body.name, (err, data) => {
      console.log(data);
      console.log(err);
      if (err) throw err;
      res.sendStatus(200);
      //file is saved at this point, data is arrayBuffer with actual saved data 
  });
});

router.get('/status', function(req, res, next) {
  var dataRead = [];
  readfiles(__dirname+'/../rig-status/', {
    depth: 0
  }, function (err, filename, content) {
    if (err) throw err;
    console.log('File ' + filename + ':');
    dataRead.push(content);
  }).then(function (files) {
    console.log('read '+ dataRead);
    res.status(200).json({data: dataRead});
  }).catch(function(err) {
    res.status(200).json({err: err});
  });
});

module.exports = router;
