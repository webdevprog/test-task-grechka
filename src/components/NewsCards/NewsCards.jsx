import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './news-cards.scss';

export const NewsCards = (props) => {
    return (
        <Row>
            {
                props.news.map(item => (
                    <Col lg="4" className="mb-5" key={item.id}>
                        <Card>
                            <Card.Img className="card__img" variant="top" src={item.image} />
                            <Card.Body>
                                <NavLink to={`news/${item.id}`}><Card.Title>{item.title}</Card.Title></NavLink>
                                <Card.Text>{item.datetime}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>

    )
}