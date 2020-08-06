import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export const NewsPage = (props) => {
    return (
        
        <>
            <h1>{props.news.title}</h1>
            <img src={props.news.image} alt={props.news.title}/>
            <p>{props.news.datetime}</p>
            <div>{ReactHtmlParser(props.news.description)}</div>
        </>
    )
} 