import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NewsCards = (props) => {
    return (
        <Row>
            {
                props.news.map(item => (
                    <Col lg="3" key={item.id}>
                        <Card>
                            <Card.Img variant="top" src={item.image} />
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