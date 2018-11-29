const { issueStore, severityStore } = require('../models');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  const openIssuesCount = issueStore.getAllOpen().length;
  res.render('dashboard', {openIssuesCount});
});

module.exports = router;
