import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('front-page', { path: '/' }, function() {
    this.route('story', { path: '/front-page/:objectID' }, function() {
      this.route('comments');
    });
  });
  this.route('ask-hn', function() {
    this.route('question', { path: ':objectID'}, function() {
      this.route('comments');
    });
  });
});

export default Router;
