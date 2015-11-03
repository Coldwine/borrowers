import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('article', {
      friend: this.modelFor('friends/show')
    });
  },
  actions: {
    save() {
      const model = this.modelFor('articles/new');
      model.save().then(() => {
        this.transitionTo('articles');
      });
    },
    cancel() {
      this.transitionTo('articles');
    }
  },
  resetController(controller, isExiting) {
    if (isExiting) {
      const model = controller.get('model');
      if ('isNew') {
        model.rollbackAttributes();
      }
    }
  }
});
