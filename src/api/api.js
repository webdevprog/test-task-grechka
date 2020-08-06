import * as axios from "axios";
import { getNewsList } from "../redux/news-list-reducer";

const grechApi = axios.create({
    baseURL: 'http://localhost:5000/api/',
});

export const newsApi = {
    getNewsList() {
        return grechApi.get('news').then(response => response.data.news);
    },

    getNews(idNews) {
        
        return grechApi.get(`news/${idNews}`).then(response => {
            return response.data
        });
    }
}