import DS from 'ember-data';

export default DS.JSONSerializer.extend({

  extract: function(store, type, payload, id, requestType) {
    var result = null;

    if (requestType === 'findAll') {
      result = payload.map(function(item) {
        return {id: `top-${item}`, item: item};
      });
    }
    return this._super(store, type, result, id, requestType);
  },

  extractSingle: function(store, type, payload) {
    var result = {id: `top-${payload}`, item: payload};
    return this._super(store, type, result);
  },
});
