var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/juanimbb',
  idAttribute: '_id',
  initialize: function () {
    console.log("model has liftoff!");
  }
})
