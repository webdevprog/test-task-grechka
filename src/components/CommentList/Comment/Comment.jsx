import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './comment.scss';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons'

export const Comment = (props) => {
    return (
        <div className={`comment comment_${props.type}`}>
            <Row className="comment-wrapper">
                <Col xs="3" sm="2" lg="1">
                    <div className="comment__photo-author">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                </Col>
                <Col xs="9" sm="10" lg="11">
                    <div className="comment-wrapper__body">
                        <time className="comment__date">
                            <FontAwesomeIcon icon={faClock} />
                            {props.date}
                        </time>

                        <div className="comment__text">{ReactHtmlParser(props.comment)}</div>
                    </div>
                </Col>
            </Row>

            {props.children}
        </div >
    );
}