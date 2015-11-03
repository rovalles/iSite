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
      default: 'angular app'
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
    this.directory('', '');
  },
  install: function () {
    /* This has an issue I'll deal with it later.

      var done = this.async();

      this.log('\n\nInitializing Git repository. If this fail, try running ' +
        chalk.yellow.bold('git init') +
       ' and make a first commit manually');


      async.series([
        function (taskDone) {
          exec('git config http.proxy http://one.proxy.att.com:8080', taskDone);
        }
      ], function (err) {

        if (err === 127) {
          this.log('Could not find the ' + chalk.yellow.bold('git') + ' command. Make sure Git is installed on this machine');
          return;
        }else{
          this.log(chalk.green('complete') + ' Git repository has been setup');
        }

        done();
      }.bind(this));
    */

    this.installDependencies();
  },
  end: function () {
  }
});
