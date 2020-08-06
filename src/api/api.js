import * as axios from "axios";

const grechkaAxios = axios.create({
    baseURL: 'http://localhost:5000/api/',
});

export const grechApi = {
    getNews() {
        return grechkaAxios.get('news').then(response => response.data.news);
    }
}