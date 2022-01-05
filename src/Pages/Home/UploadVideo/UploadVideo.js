import React from 'react';
import './UploadVideo.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player'

const UploadVideo = () => {
    return (
        <Container className='custom-margin'>
            <Row xs={12} md={2} className='d-flex align-items-center g-4'>
                <Col>
                    <p className='custom-text-warning'>Why people choice us</p>
                    <h1 className='custom-text-primary my-4'>For charity child progress begins &with content</h1>
                    <p>Join with our creative & friendly team in easy way for move forward in smart way for save world.Don’t make you hurter for saving this world. Just we are like postman for takeout to children.</p>
                    <Button className='custom-btn py-3 px-5 rounded-pill'>Watch Now<i className="fas fa-arrow-right ms-2"></i></Button>
                </Col>
                <Col>
                    <ReactPlayer
                        className='video-bg'
                        url="https://www.youtube.com/watch?v=2l1LWmEASC8"
                        controls
                        playbackRate={2}
                        width="100%"
                    />
                </Col>

            </Row>
        </Container>
    );
};

export default UploadVideo;