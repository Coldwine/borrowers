import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const articles = this.modelFor('friends/show').get('articles');
    if (articles.get('isFulfilled')) {
      articles.reload();
    }
    return articles;
  },
  actions: {
    save(model) {
      model.save();
    }
  },
  queryParams: {
    showReturned: {
      reloadModel: true
    }
  }
});
