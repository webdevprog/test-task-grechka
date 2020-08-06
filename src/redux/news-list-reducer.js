import { newsApi } from "../api/api";

const SET_NEWS_LIST = 'SET_NEWS_LIST';

let initialState = {
    newsList: [],
}

const newsListReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NEWS_LIST :
            return {
                ...state,
                newsList: action.newsList
            }
            break;
        default:
            return state;
    }
}

export const setNewsList = (newsList) => ({type: SET_NEWS_LIST, newsList});

export const getNewsList = () => {
    return (dispatch) => {
        newsApi.getNewsList().then(data => {
            dispatch(setNewsList(data));
        });
    }
}

export default newsListReducer;