import React, {Component, Fragment} from 'react';

import FullPost from './../FullPost/FullPost';
import Posts from './../Posts/Posts';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

class Blog extends Component {
    state = {}
    render() { 
        return ( 
            <Fragment>
                <Switch>
                    <Route excact path="/posts/:id" component={FullPost} />
                    <Route excact path="/" component={Posts} /> 
                </Switch> 
            </Fragment>
         )
    }
}
 
export default Blog;