const { issueStore, severityStore } = require('../models');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  const openissues = issueStore.getAllOpen();
  const openIssuesCount = openissues.length;
  let highIssuesCount = 0;
  let mediumIssuesCount = 0;
  if (openIssuesCount > 0)
  {
    highIssuesCount = openissues.filter(issue => issue.severity === 'high').length / openIssuesCount;
    mediumIssuesCount = openissues.filter(issue => issue.severity === 'medium').length / openIssuesCount;
  }
  else
  {
    highIssuesCount = 0;
    mediumIssuesCount = 0;
  }  

  res.render('dashboard', {openIssuesCount, highIssuesCount, mediumIssuesCount});
});

module.exports = router;
