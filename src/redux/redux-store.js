import newsListReducer from "./news-list-reducer";
import newsPageReducer from "./news-page-reducer";
import thunk from "redux-thunk";
const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
    newsListPage: newsListReducer,
    newsPage: newsPageReducer
});

export let store = createStore(reducers, applyMiddleware(thunk));