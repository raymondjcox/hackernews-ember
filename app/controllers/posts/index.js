import Ember from 'ember';

export default Ember.Controller.extend({
  start: 0,
  count: 25,

  setInitialEnd: function() {
    this.set('end', this.get('count'));
  }.on('init'),

  limitedTopStories: function() {
    return this.get('model').slice(this.get('start'), this.get('end'));
  }.property('model', 'start', 'end'),

  actions: {
    infiniteScroll: function() {
      this.set('end', this.get('end') + this.get('count'));
    }
  }
});

