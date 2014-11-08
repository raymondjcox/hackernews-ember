import Ember from 'ember';

export default Ember.ObjectController.extend({

  hasComment: Ember.computed.gt('numComments', 0),

  numComments: function() {
    if (this.get('kids') !== undefined) {
      return this.get('kids').length;
    } else {
      return 0;
    }
  }.property('kids')
});
