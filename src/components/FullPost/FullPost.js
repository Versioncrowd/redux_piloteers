import React, { Component, ReactFragment } from 'react';
import { Col, Button } from 'reactstrap';
import './FullPost.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionCreators from './../../store/actions';


class FullPost extends Component {
    state = {
        post: [{
            title: 'Title here',
            id: 1,
            body: 'Body goes here'
        }]
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const { dispatch, fetchPost } = this.props;
        fetchPost(id)
    }

    render() { 
        return ( 
            <React.Fragment>
                <Col sm={{ size: 6, offset: 3}}>
                    <div className="title">{this.props.post[0].title}</div>
                    <div className="body">{this.props.post[0].body}</div>
                </Col>
                
                <Col sm={{ size: 6, offset: 3}}>
                    <Link to="/">
                        <Button>
                            Back to Home
                        </Button>
                    </Link>
                </Col>
             </React.Fragment>
        
         )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        post: state.post
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: (id) => dispatch(actionCreators.getPost(id))
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(FullPost);