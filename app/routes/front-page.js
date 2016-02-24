import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('http://hn.algolia.com/api/v1/search?tags=front_page');
  }
});
