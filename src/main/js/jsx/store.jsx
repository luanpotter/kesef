import yawp from 'yawp';

var cbs = {};

var store = {
  on : function (event, callback) {
    var id = Symbol();
    cbs[event] = cbs[event] || [];
    cbs[event].push({ id, callback });
    if (cbs[event].last) {
      callback(cbs[event].last);
    }
    return id;
  },
  emit : function (event, data) {
    cbs[event] = cbs[event] || [];
    cbs[event].forEach(i => i.callback(data));
    cbs[event].last = data;
  },
  get : function (event) {
    return cbs[event].last;
  },
  clear : function (id) {
    Object.keys(cbs).map(k => cbs[k]).forEach(l => _.remove(l, cb => cb.id === id));
  }
};

var promise = yawp('/users').get('me');
promise.then(null, function (error) {
   store.emit('page', 'signup');
});
store.emit('user', promise);

module.exports = store;
