const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

/// Action creator a func, that returns action
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "First Action",
  };
};

const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
    info: "Second Action",
  };
};

// const initialState = {
//   noOfCakes: 10,
//   noOfIceCreams: 20,
// };

const cakeInitialState = {
  noOfCakes: 10,
};

const iceCreamInitialState = {
  noOfIceCreams: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "BUY_CAKE":
//       return {
//         ...state,
//         noOfCakes: state.noOfCakes - 1,
//       };

//     case "BUY_ICECREAM":
//       return {
//         ...state,
//         noOfIceCreams: state.noOfIceCreams - 1,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = cakeInitialState, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };
    default:
      return state;
  }
};
const root = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(root, applyMiddleware(logger));
console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
