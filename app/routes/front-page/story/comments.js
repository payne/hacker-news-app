import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let story = this.modelFor('front-page.story');

    return Ember.$.getJSON(`http://hn.algolia.com/api/v1/search?tags=comment,story_${story.objectID}`);
  }
});
