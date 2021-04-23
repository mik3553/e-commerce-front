import {config} from '../utils/config';

export const getArticles = () => {

    let options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    return fetch(`${config.devUrl}/articles`, options)

}

export const createArticle = (article) => {

    let body = JSON.stringify({
        title : article.title,
        price : article.price
    });

    let options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization' : `bearer ${localStorage.getItem('token')}`
        },
        body: body
    };
    return fetch(`${config.devUrl}/article`, options)

}

export const deleteArticle = (id) => {
    let options = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization' : `bearer ${localStorage.getItem('token')}`
        },
    };
    return fetch(`${config.devUrl}/article/${id}`, options)
}

export const updateArticle = (article) => {

    let body = JSON.stringify({
        title: article.title,
        price : article.price
    });

    let options = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization' : `bearer ${localStorage.getItem('token')}`
        },
        body: body
    };
    return fetch(`${config.devUrl}/article/${article._id}`, options)
}