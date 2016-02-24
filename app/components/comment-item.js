import Ember from 'ember';

export default Ember.Component.extend({
  isCommentVisible: true,

  actions: {
    toggleComment() {
      this.toggleProperty('isCommentVisible');
    }
  }
});
