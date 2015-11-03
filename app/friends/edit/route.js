import Ember from 'ember';

export default Ember.Route.extend({
  resetController(controller, isExiting) {
    if (isExiting) {
      const model = controller.get('model');
      model.rollbackAttributes();
    }
  }
});
