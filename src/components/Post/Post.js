import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Post.css';


const Post = (props) => {
  return (
      <Link to={'/posts/' + props.id}>
        <Row onClick={props.clicked}>
          <Col>
              <div className="post">
                <div className="title">{props.title}</div>
              </div>
          </Col>
        </Row>
      </Link>
  )
}
 
export default Post;