// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  model: SongModel,
  url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',

  parse: function(response){
  	return response.results;
  },
// Backbone Collection Initialization in View: http://stackoverflow.com/questions/31362695/backbone-collection-initialization-in-view
  initialize: function(){
  	this.fetch();
  }

});