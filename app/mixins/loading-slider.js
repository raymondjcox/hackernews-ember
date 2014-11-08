import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    loading: function() {
      var controller = this.controllerFor('application');
      controller.set('loading', true);
      this.router.one('didTransition', function() {
        controller.set('loading', false);
      });
      this.render('application');
    },
    finished: function() {
      this.controllerFor('application').set('loading', false);
    }
  }
});
