import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'https://hacker-news.firebaseio.com/',
        namespace = 'v0/',
        baseUrl = url + namespace,
        that = this;

    return Ember.$.get(baseUrl + 'item/' + params['comment_id'] + '.json').then(function(results) {
      that.controllerFor('posts.comments').set('post', results);
      if (results.kids === undefined) {
        return Ember.RSVP.reject('No comments');
      }
      var arr = results.kids.slice(0,10).map(function(result) {
        var resultUrl = baseUrl + 'item/' + result + '.json';
        return Ember.$.get(resultUrl);
      });
      return Ember.RSVP.all(arr);
    });
  },

  actions: {
    error: function(reason) {
      this.controllerFor('application').set('loading', false);
      console.error(reason);
    }
  }
});
