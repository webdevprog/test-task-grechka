import React from 'react';
import { Comment } from './Comment/Comment';

export const CommentList = (props) => {
    return (
        <div className="comment-list">
            <h2 className="comment-list__title">Comments - {props.totalComments}</h2>
            <div className="comment-list__body">
                {
                    props.comments.map((item) => (

                        <Comment
                            key={item.id}
                            type="parent"
                            date={item.datetime}
                            comment={item.comment}
                        >
                            {
                                item.children &&
                                item.children.map(item => (
                                    <Comment
                                        type="child"
                                        key={item.id}
                                        date={item.datetime}
                                        comment={item.comment}
                                    />
                                ))
                            }
                        </Comment>
                    ))
                }
            </div>
        </div>
    );
}