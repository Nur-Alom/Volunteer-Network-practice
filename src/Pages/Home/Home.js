import React from 'react';
import './Home.css';
import img from '../../images/logo.png';
import { Card } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="home container">
            <div className="search-box">
                <input id="input-field" className="search-field" type="text" placeholder="Search" />
                <button className="search-btn">Search</button>
            </div>
            <div className="services-field">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>We Help EachOther</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Home;