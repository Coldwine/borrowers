import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  createdAt: attr('date'),
  description: attr('string'),
  notes: attr('string'),
  state: attr('string', { defaultValue: 'borrowed' }),
  friend: belongsTo('friend')
});
