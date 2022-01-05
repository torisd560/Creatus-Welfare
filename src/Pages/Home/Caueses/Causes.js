import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleCauses from './SingleCauses/SingleCauses';

const Causes = () => {

    const [causesData, setCausesData] = useState([])

    const url = 'https://lit-lowlands-70936.herokuapp.com/funds'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCausesData(data.slice(0, 6)))
    }, [])
    return (
        <Container className='my-5'>
            <div className='text-center my-5'>
                <p className='custom-text-warning '><i className="far fa-heart me-3"></i>Causes</p>
                <h1 className='custom-text-primary fw-bold'>Latest Causes</h1>
            </div>
            <Row xs={12} md={3} className="g-4">
                {
                    causesData.map(causes => <SingleCauses causes={causes} key={causes.id}></SingleCauses>)
                }
            </Row>
        </Container>
    );
};

export default Causes;