import newsReducer from "./news-reducer";
import thunk from "redux-thunk";
const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    newsPage: newsReducer
});

export let store = createStore(reducers, applyMiddleware(thunk));