import { newsApi } from "../api/api";

const SET_NEWS = 'SET_NEWS';

let initialState = {
    news: [],
}

const newsPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NEWS :
            return {
                ...state,
                news: action.news
            }
            break;
        default:
            return state;
    }
}

export const setNews = (news) => ({type: SET_NEWS, news});

export const getNews = (idNews) => {
    return (dispatch) => {
        newsApi.getNews(idNews).then(data => {
            dispatch(setNews(data));
        });
    }
}

export default newsPageReducer;