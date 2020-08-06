import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export const NewsCards = (props) => {
    const regexRemoveTags = /(<([^>]+)>)/ig;
    const regexDate = /(\d{4})-(\d{2})-(\d{2})\w{1}?((\d{2}):(\d{2})).+/gi;

    return (
        <Row>
            {
                props.news.map(item => (
                    <Col lg="3" key={item.id}>
                        <Card>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <NavLink to={`news/${item.id}`}><Card.Title>{item.title}</Card.Title></NavLink>
                                <Card.Text>{item.datetime.replace(regexDate, "$3.$2.$1 $4")}</Card.Text>
                                <Card.Text>{item.description.replace(regexRemoveTags, '').slice(0, 100)+'...'}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>

    )
}