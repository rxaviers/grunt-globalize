/**
 * grunt-globalize
 *
 * Copyright (c) Rafael Xavier de Souza
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        "Gruntfile.js",
        "tasks/**/*.js"
      ],
      options: {
        jshintrc: ".jshintrc",
      }
    },
    dco: {
      current: {
        options: {
          exceptionalAuthors: {
            "rxaviers@gmail.com": "Rafael Xavier de Souza"
          }
        }
      }
    }
  });

  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.registerTask("default", ["jshint", "dco"]);
};
