'use strict';
var yeoman = require('yeoman-generator'),
    yosay = require('yosay'),
    exec = require('child_process').exec,
    async = require('async'),
    chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [{
      type: 'string',
      name: 'appName',
      message: 'What would you like to call the app?',
      default: 'myApp'
    },
    {
      type: 'string',
      name: 'projectName',
      message: 'What would like to title this application?',
      default: 'App Name'
    }];

    this.prompt(prompts, function (answers) {
      this.appName = answers.appName;
      this.projectName = answers.projectName;

      done();
    }.bind(this));
  },
  configuring: function(){
    this.destinationRoot(this.appName);
  },
  writing: function () {
    this.directory( this.sourceRoot(), this.destinationRoot());
  },
  install: function () {
    this.installDependencies();
  },
  end: function () {
  }
});
