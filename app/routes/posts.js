import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'https://hacker-news.firebaseio.com/',
        namespace = 'v0/',
        baseUrl = url + namespace;

    return Ember.$.get(baseUrl + 'topstories.json').then(function(results) {
      var arr = results.slice(0,30).map(function(result) {
        var resultUrl = baseUrl + 'item/' + result + '.json';
        return Ember.$.get(resultUrl);
      });
      return Ember.RSVP.all(arr);
    });
  }
});
