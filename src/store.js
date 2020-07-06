// import { createStore, applyMiddleware, compose } from "redux"
// // import createDebounce from "redux-debounced"
// import thunk from "redux-thunk"
// import rootReducer from "./reducers/index"

// const middlewares = [thunk]

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(
//   rootReducer,
//   {},
//   composeEnhancers(applyMiddleware(...middlewares))
// )

// export { store }

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';

// const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
        // loggerMiddleware
    )
);