import Ember from 'ember';
import LoadingSliderMixin from 'hacker-news-ember/mixins/loading-slider';

module('LoadingSliderMixin');

// Replace this with your real tests.
test('it works', function() {
  var LoadingSliderObject = Ember.Object.extend(LoadingSliderMixin);
  var subject = LoadingSliderObject.create();
  ok(subject);
});
