import * as axios from "axios";

const grechApi = axios.create({
    baseURL: 'http://localhost:5000/api/',
});

const regexDate = /(\d{4})-(\d{2})-(\d{2})\w{1}?((\d{2}):(\d{2})).+/gi;

export const newsApi = {
    getNewsList(startItem, limitItem) {
        return grechApi.get('news').then(response => {
            let customResponse = {
                news: [],
                newsTotal: response.data.news.length,
            };

            customResponse.news = response.data.news.slice(startItem, limitItem).map(item => {
                item.datetime = item.datetime.replace(regexDate, "$3.$2.$1 $4");
                return item;
            });

            return customResponse;
        });
    },

    getNews(idNews) {
        return grechApi.get(`news/${idNews}`).then(response => {
            if (response.data) {
                return { ...response.data, datetime: response.data.datetime.replace(regexDate, "$3.$2.$1 $4") };
            }
        });
    }
}