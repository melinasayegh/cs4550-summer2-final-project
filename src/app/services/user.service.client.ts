import { Injectable } from '@angular/core';

const LOCAL_URL = 'http://localhost:3000/api/';
const HEROKU_URL = 'https://community-cookings-server.herokuapp.com/api/';

@Injectable()
export class UserServiceClient {
    findUserById(userId) {
        return fetch(LOCAL_URL + 'user/' + userId)
            .then(response => response.json());
    }
    register(user) {
        return fetch(LOCAL_URL + 'register', {
            method: 'post',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }
    login(username, password) {
        const user = {
            username: username,
            password: password
        };
        return fetch(LOCAL_URL + 'login', {
            method: 'post',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then((response) => response.json());
    }
    logout() {
        return fetch(LOCAL_URL + 'logout', {
            method: 'post',
            credentials: 'include'
        });
    }
    profile() {
        return fetch(LOCAL_URL + 'profile', {
            credentials: 'include',
        }).then(response => response.json());
    }
    deleteProfile() {
        return fetch(LOCAL_URL + 'user/delete', {
            method: 'delete',
            credentials: 'include',
        });
    }
    updateProfile(newProfile) {
        return fetch(LOCAL_URL + 'user/update', {
            method: 'put',
            body: JSON.stringify(newProfile),
            credentials: 'include',
        }).then(response => response.json());
    }
    currentUser() {
        return fetch(LOCAL_URL + 'currentUser', {
            credentials: 'include'
        }).then((response) => (
                    response.json()),
                error => {
                    console.log('Error is because there is no current user.');
                });
    }
    findAllUsers = () => {
        return fetch(LOCAL_URL + 'user', {
            method: 'get',
            credentials: 'include'
        }).then(response => response.json());
    }
    adminUpdatesUser(userId, user) {
        return fetch(LOCAL_URL + 'admin/user/update/' + userId, {
            method: 'put',
            body: JSON.stringify(user),
            credentials: 'include',
        }).then(response => response.json());
    }
    adminDeletesUser(userId) {
        return fetch(LOCAL_URL + 'admin/user/delete/' + userId, {
            method: 'delete',
            credentials: 'include',
        });
    }
    adminCreatesUser(user) {
        return fetch(LOCAL_URL + 'admin/user/create', {
            method: 'post',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }
}
