import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('questions', { path: '/questions/:id' }, function() {
    this.route('card', { path: 'cards/:card_id' });
  });
});

export default Router;