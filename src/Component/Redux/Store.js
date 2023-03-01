import reducer from './Reducer/reducer'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
const enhancers = [];

if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
}

const middleware = [thunk];

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(reducer, undefined, composedEnhancers)

export default store;