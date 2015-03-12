import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string'),
  score: DS.attr('number'),
  by: DS.attr('string'),
  kids: DS.attr('array')
});
