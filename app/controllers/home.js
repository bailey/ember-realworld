import Ember from 'ember';
const { computed, inject } = Ember;

export default Ember.Controller.extend({
  queryParams: ['page'],
  page: 1,
  isLoading: false,
  session: inject.service(),

  isAuthenticated: computed.oneWay('session.isAuthenticated')
});
