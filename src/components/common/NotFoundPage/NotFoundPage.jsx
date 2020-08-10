import React from 'react';
import { NavLink } from 'react-router-dom';

export const NotFoundPage = (props) => {
    return (
        <div>
            <h1>404 - Error Page</h1>
            <div>Back to <NavLink to="/">Home page</NavLink></div>
        </div>
    )
}