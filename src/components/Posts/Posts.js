import React, {Component} from 'react';
import Post from './../Post/Post';
import axios from 'axios';
import './Posts.css';
import { connect } from 'react-redux';
import * as actionCreators from './../../store/actions';


class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount(){
        const { dispatch, fetchPosts, fetchAuthors } = this.props;
        fetchPosts();
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    render() { 
        const authors = this.props.authors;

        const posts = this.props.posts.map((post, index )=> {
            return <Post 
                      title={post.title} 
                      key={index} 
                      id={post.id} 
                      />
          })

        return (
            posts
        )
    }
}
 
const mapStateToProps = state => {
    return {
        posts: state.posts,
        authors: state.authors
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch(actionCreators.getPosts())
        }
    }


 
export default connect(mapStateToProps, mapDispatchToProps)(Posts);