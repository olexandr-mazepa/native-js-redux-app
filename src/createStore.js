export function createStore(rootReducer, initialState) {
  let state = rootReducer(initialState, {type:'__INIT__'});
  const subscribers = [];

  return {
    dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach((subscriber) => {
        subscriber();
      });
    },
    subscribe(cb) {
      subscribers.push(cb);
    },
    getState() {
      return state;
    },
  };
}