import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { NavLink } from 'react-router-dom';

export const NewsPage = (props) => {
    return (

        <>
            <h1>{props.news.title}</h1>
            <img src={props.news.image} alt={props.news.title} />
            <p>{props.news.datetime}</p>
            <div>
                <NavLink to={`/profile/${props.news.authorId}`}>{props.news.authorName}</NavLink>
            </div>
            <div>{ReactHtmlParser(props.news.description)}</div>
        </>
    )
} 