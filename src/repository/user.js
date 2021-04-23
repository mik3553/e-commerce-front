import {config} from '../utils/config';

export const register = (user) => {

    let body = JSON.stringify({
        firstName: user.firstName,
        lastName : user.lastName,
        password : user.password,
        email    : user.email
    });

    let options = {
        method: 'POST',
        // credentials : 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body
    };
    return fetch(`${config.devUrl}/register`, options)

}

export const userAccount = () => {

    let options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization' : `bearer ${localStorage.getItem('token')}`
        }
    };
    return fetch(`${config.devUrl}/user`, options)

}

export const logIn = (user) => {

    let body = JSON.stringify({
        email: user.email,
        password : user.password,

    });
    let options = {
        method: 'POST',
        // credentials : 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body
    };
    return fetch(`${config.devUrl}/logIn`, options)
}

export const updateUser = (user) => {

    let body = JSON.stringify({
        firstName: user.firstName,
        lastName : user.lastName,
        password : user.password,
        email    : user.email
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
    return fetch(`${config.devUrl}/user`, options)
}

export const deleteUser = () => {

    let options = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization' : `bearer ${localStorage.getItem('token')}`
        }
    };
    return fetch(`${config.devUrl}/user`, options)
}