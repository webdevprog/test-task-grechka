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
        return grechApi.get(`news/${idNews}`).then((news) => {
            if (news.data) {
                return profileApi.getProfile(news.data.authorId).then((author) => {
                    return {
                        ...news.data,
                        datetime: news.data.datetime.replace(regexDate, "$3.$2.$1 $4"),
                        authorName: `${author.firstName} ${author.lastName}`
                    };
                });
            }
        });
    },

    getComments(id) {
        return grechApi.get(`comments/${id}`).then(response => {
            if (response.data) {
                let comments = response.data.map(item => {
                        item.datetime = item.datetime.replace(regexDate, "$3.$2.$1 $4");
                        return item;
                    }),
                    commentsLength = comments.length,
                    parent = comments.filter(item => parseInt(item.parentId) === parseInt(id)),
                    child = comments.filter(item => item.parentId !== id),
                    commentsTree = [];

                parent.forEach(parentItem => {
                    parentItem.children = [...child.filter(childItem => childItem.parentId === parentItem.id)];
                    commentsTree.push(parentItem);
                });

                return {commentsLength, commentsTree};
            }
        });
    }
}


export const profileApi = {
    getProfile(profileID) {
        return grechApi.get(`user/${profileID}`).then(response => {
            if (response.data) {
                return response.data;
            }
        });
    }
}