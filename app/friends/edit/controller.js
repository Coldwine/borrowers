import FriendsBaseController from '../base-controller';

export default FriendsBaseController.extend({
  actions: {
    cancel() {
      this.transitionToRoute('articles', this.get('model'));
    }
  }
});
