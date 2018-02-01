'use strict';
const yeoman = require('yeoman-generator'),
    async = require('async'),
    chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({

  prompting: function () {
    const done = this.async();

    console.log(this.yeoman);

    var prompts = [
        {
          type: 'string',
          name: 'appTitle',
          message: 'What would like to title this application?',
          default: 'My App'
        },
        {
          type: 'string',
          name: 'appName',
          message: 'What would you like to call the app?',
          default: 'myApp'
        },
        {
          type: 'string',
          name: 'appUser',
          message: 'Who are you?',
          default: 'User'
        },
        {
          type: 'string',
          name: 'appEmail',
          message: 'What is your email?',
          default: 'Email'
        }
    ];

    this.prompt(prompts, function (answers) {
      this.appName = answers.appName;
      this.appTitle = answers.appTitle;

      done();
    }.bind(this));
  },
  configuring: function(){
    this.destinationRoot(this.appName);
  },
  writing: function () {
		this.directory(
			this.sourceRoot(),
			this.destinationRoot()
		);
  },
  install: function () {
    this.installDependencies();
  },
  end: function () {
  }
});
