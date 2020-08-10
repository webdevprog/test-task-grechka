import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { NavLink } from 'react-router-dom';
import { CommentList } from '../CommentList/CommentList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faUser } from '@fortawesome/free-solid-svg-icons'
import './newspage.scss';

export const NewsPage = (props) => {
    return (
        <article className="page-news">
            <header
                className="page-news__header"
                style={{ backgroundImage: `url(${props.news.image})` }}
            >
                <h1 className="page-news__title">{props.news.title}</h1>
                <div className="page-news__info">
                    <div>
                        <FontAwesomeIcon icon={faClock} />
                        <time datetime={props.news.datetime}>{props.news.datetime}</time>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUser} />
                        <NavLink
                            to={`/profile/${props.news.authorId}`}
                            className="page-news__author"
                        >
                            {props.news.authorName}
                        </NavLink>
                    </div>
                </div>
            </header>

            <div className="page-news__content">
                {ReactHtmlParser(props.news.description)}
            </div>

            {props.totalComments ? <CommentList comments={props.comments} totalComments={props.totalComments} /> : <h2>No comment yet!</h2>}
        </article>
    )
} 