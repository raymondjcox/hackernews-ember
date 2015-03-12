import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    var self = this;
    Ember.$(window).scroll(function() {
      if (Ember.$('body').height() <= (Ember.$(window).height() + Ember.$(window).scrollTop())) {
        self.sendAction('infiniteScroll');
      }
    });
  }
});
