import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', function() {
    this.route('developers');
    this.route('lawyers');
  });
  this.route('cocktails', function() {
    this.route('cocktail', {
      path: ':cocktail_id'
    });
    this.route('new');
  });
});

export default Router;
