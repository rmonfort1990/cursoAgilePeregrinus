const { issueStore, severityStore } = require('../models');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  const openissues = issueStore.getAllOpen();
  const openIssuesCount = openissues.length;
  let highIssuesCount = 0;
  if (openIssuesCount > 0)
  {
    highIssuesCount = openissues.filter(issue => issue.severity === 'high').length / openIssuesCount;
  }
  else
  {
    highIssuesCount = 0;
  }
  

  res.render('dashboard', {openIssuesCount, highIssuesCount});
});

module.exports = router;
