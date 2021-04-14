var ApplicationAdapter = RESTAdapter.extend({
  get headers() {
    var token = this.session.authToken();
    var token2 = this.session.genTok();
    return {
      'X-CSRF-Token': token2,
    };
  }
});
