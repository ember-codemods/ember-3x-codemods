var ApplicationAdapter = RESTAdapter.extend({
  headers: computed('session.authToken', function() {
    var token = this.session.authToken();
    var token2 = this.session.genTok();
    return {
      'X-CSRF-Token': token2,
    };
  }).volatile()
});
