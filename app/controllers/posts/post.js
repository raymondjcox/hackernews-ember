import Ember from 'ember';

export default Ember.Controller.extend({
  hasComment: Ember.computed.gt('numComments', 0),
  numComments: Ember.computed.readOnly('kids.length')
});
