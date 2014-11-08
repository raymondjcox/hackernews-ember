import Ember from 'ember';

export default Ember.ObjectController.extend({
  numComments: function() {
    if (this.get('kids') !== undefined) {
      return this.get('kids').length;
    } else {
      return 0;
    }
  }.property('kids')
});
