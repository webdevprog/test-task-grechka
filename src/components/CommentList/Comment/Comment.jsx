import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './comment.scss';

export const Comment = (props) => {
    return (
        <div className={`comment comment_${props.type}`}>
            <time className="comment__date">{props.date}</time>
            <div className="comment__text">{ReactHtmlParser(props.comment)}</div>

            {props.children}
        </div>
    );
}