const { environment } = require('@rails/webpacker')

// Define entry points for webpack
environment.entry.set('application', './app/javascript/packs/application.js');

module.exports = environment
