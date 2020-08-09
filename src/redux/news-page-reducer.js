import { newsApi } from "../api/api";

const SET_NEWS = 'SET_NEWS';
const SET_COMMENTS = 'SET_COMMENTS';
const SET_TOTAL_COMMENTS = 'SET_TOTAL_COMMENTS';

let initialState = {
    news: [],
    comments: [],
    totalComments: 0,
}

const newsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                news: action.news
            }
        case SET_COMMENTS:
            return {
                ...state,
                comments: action.comments
            }
        case SET_TOTAL_COMMENTS:
            return {
                ...state,
                totalComments: action.commentsLength
            }
        default:
            return state;
    }
}

export const setNews = (news) => ({ type: SET_NEWS, news });
export const setComments = (comments) => ({ type: SET_COMMENTS, comments });
export const setTotalComments = (commentsLength) => ({ type: SET_TOTAL_COMMENTS, commentsLength });

export const getNews = (idNews) => {
    return (dispatch) => {
        newsApi.getNews(idNews).then(data => {
            dispatch(setNews(data));
        });
    }
}

export const getComments = (id) => {
    return (dispatch) => {
        newsApi.getComments(id).then(response => {
            dispatch(setTotalComments(response.commentsLength));
            dispatch(setComments(response.commentsTree));
        });
    }
}

export default newsPageReducer;