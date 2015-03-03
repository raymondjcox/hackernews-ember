import Ember from 'ember';

export default Ember.Component.extend({
  hasComment: Ember.computed.gt('numComments', 0),
  numComments: Ember.computed.readOnly('post.kids.length')
});
