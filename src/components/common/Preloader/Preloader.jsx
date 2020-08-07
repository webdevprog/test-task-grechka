import React from 'react';
import { Spinner } from 'react-bootstrap';
import style from './preloader.module.scss'; 

export const Preloader = (props) => {
    return (
        <div className={`${style.preloaderWrapper} mb-5`}>
            <Spinner animation="grow" variant="dark" />
        </div>
    )
}