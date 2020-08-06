import { grechApi } from "../api/api";

const SET_NEWS = 'SET_NEWS';

let initialState = {
    newsList: []
}

const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NEWS :
            return {
                ...state,
                newsList: action.newsList
            }
            break;
        default:
            return state;
    }
}

export const setNews = (newsList) => ({type: SET_NEWS, newsList});

export const getNews = () => {
    return (dispatch) => {
        grechApi.getNews().then(data => {
            dispatch(setNews(data));
        });
    }
}

export default newsReducer;