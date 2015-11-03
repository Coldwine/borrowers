import Ember from 'ember';

const { Controller, computed } = Ember;

export default Controller.extend({
  hasDescription: computed.notEmpty('model.description'),
  isValid: computed.and('hasDescription'),
  actions: {
    save() {
      if (this.get('isValid')) {
        return true;
      } else {
        this.set('errorMessage', 'You have to give a description');
      }
    }
  }
});
