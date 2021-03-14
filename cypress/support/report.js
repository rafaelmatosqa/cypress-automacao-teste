// Prepare folder structure

const fs = require('fs-extra');

const dir = './cucumber_report/html';

 

if (fs.existsSync(dir)){

  fs.removeSync(dir);

}

fs.mkdirSync(dir);

 

// Report configuration

const reporter = require('cucumber-html-reporter');

const options = {

  theme: 'bootstrap',
  
  name: "Estudos com Cypress",

  brandTitle:"Relatório de teste de aceitação",

  jsonDir: 'cucumber_report',

  output: 'cucumber_report/html/cucumber_report.html',

  reportSuiteAsScenarios: true,

  scenarioTimestamp: true,

  launchReport: true,

  metadata: {

  }

};

 

// Generate report

reporter.generate(options);