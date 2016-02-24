import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let story = this.modelFor('ask-hn.question');

    return Ember.$.getJSON(`http://hn.algolia.com/api/v1/search?tags=comment,story_${story.objectID}`);
  }
});
