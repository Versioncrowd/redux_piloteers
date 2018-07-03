import axios from 'axios';

export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_AUTHORS = 'LOAD_AUTHORS';
export const LOAD_POST = 'LOAD_POST';


export const loadPosts = (response) => {
    return {
        type: LOAD_POSTS,
        posts: response.data
    }
}


export const getPosts = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            dispatch(loadPosts(response))
        })
    }
}

export const loadPost = (post) => {
    return {
        type: LOAD_POST,
        post: post.data
    }
}

export const getPost = (id) => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(post => {
            dispatch(loadPost(post))
        })
    }
}