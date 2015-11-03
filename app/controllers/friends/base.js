import Ember from 'ember';

const { Controller, computed } = Ember;

export default Ember.Controller.extend({
  isValid: computed.and('model.email', 'model.firstName', 'model.lastName', 'model.twitter',),
  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then((friend) => {
          this.transitionToRoute('articles', friend);
        });
      } else {
        this.set('errorMessage', 'You have to fill in all the fields');
      }
    }
  }
});
