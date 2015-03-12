import ApplicationAdapter from './application';
import Ember from 'ember';

var inflector = Ember.Inflector.inflector;
inflector.uncountable('item');

export default ApplicationAdapter.extend({
});
