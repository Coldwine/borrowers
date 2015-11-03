import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['showReturned'],
  showReturned: false,
  possibleStates: ['borrowed', 'returned'],
  filteredResults: Ember.computed('showReturned', 'model.@each.state', function() {
    const articles = this.get('model');
    if (this.get('showReturned')) {
      return articles;
    } else {
      return articles.filterBy('state', 'borrowed');
    }
  })
});
