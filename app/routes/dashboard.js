const { issueStore, severityStore } = require('../models');
const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  const openissues = issueStore.getAllOpen();
  const openIssuesCount = openissues.length;
  let highIssuesCount = 0;
  let mediumIssuesCount = 0;
  let lowIssuesCount = 0;
  if (openIssuesCount > 0)
  {
    highIssuesCount = openissues.filter(issue => issue.severity === 'High').length / openIssuesCount;
    mediumIssuesCount = openissues.filter(issue => issue.severity === 'Medium').length / openIssuesCount;
    lowIssuesCount = openissues.filter(issue => issue.severity === 'Low').length / openIssuesCount;
  }
  else
  {
    highIssuesCount = 0;
    mediumIssuesCount = 0;
    lowIssuesCount = 0;
  }  

  res.render('dashboard', {openIssuesCount, highIssuesCount, mediumIssuesCount, lowIssuesCount});
});

module.exports = router;
