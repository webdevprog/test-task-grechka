import { newsApi } from "../api/api";

const SET_NEWS_LIST = 'SET_NEWS_LIST';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const GET_TOTAL_NEWS = 'GET_TOTAL_NEWS';
const UPDATE_NEWS_LIST = 'UPDATE_NEWS_LIST';

let initialState = {
    newsList: [],
    totalNews: 0,
    isFetching: false
}

const newsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS_LIST:
            return {
                ...state,
                newsList: action.newsList
            }
        case UPDATE_NEWS_LIST:
            return {
                ...state,
                newsList: [...state.newsList, ...action.newsList]
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case GET_TOTAL_NEWS:
            return {
                ...state,
                totalNews: action.total
            }
        default:
            return state;
    }
}

export const setNewsList = (newsList) => ({ type: SET_NEWS_LIST, newsList });
export const toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching });
export const getTotalNews = (total) => ({ type: GET_TOTAL_NEWS, total });
export const updateNewsList = (newsList) => ({ type: UPDATE_NEWS_LIST, newsList });

export const getNewsList = (start, limitItem) => {
    return (dispatch) => {
        dispatch(toggleFetching(true))
        newsApi.getNewsList(start = 0, limitItem).then(data => {
            dispatch(setNewsList(data.news));
            dispatch(getTotalNews(data.newsTotal));
            dispatch(toggleFetching(false))
        });
    }
}

export const updateNewsListThunk = (start, limitItem, callback) => {
    return (dispatch) => {
        newsApi.getNewsList(start, limitItem).then(data => {
            dispatch(updateNewsList(data.news));
            callback();
        });
    }
}

export default newsListReducer;