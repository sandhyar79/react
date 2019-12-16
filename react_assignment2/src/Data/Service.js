import React from 'react';
import axios from 'axios';
export default class Service extends React.Component{
    getUsers(){
        return axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => response.data);
    }
    getPosts(props){
        return axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.data);
    }
    getComments(){
        return axios.get('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.data);
    }
    getTodos(){
        return axios.get('https://jsonplaceholder.typicode.com/todos')
                    .then(response => response.data);
    }
}