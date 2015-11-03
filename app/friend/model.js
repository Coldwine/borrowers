import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;
const { Model, attr, hasMany } = DS;

export default Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  email: attr('string'),
  twitter: attr('string'),
  articles: hasMany('article', { async: true }),
  totalArticles: attr('number'),
  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
