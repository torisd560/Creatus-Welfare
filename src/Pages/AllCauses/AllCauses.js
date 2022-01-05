import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SingleCauses from '../Home/Caueses/SingleCauses/SingleCauses';
import Header from '../Shared/Header/Header'
import Footer from '../Shared/Footer/Footer'

const AllCauses = () => {
    const [allCausesData, setAllCausesData] = useState([])

    const url = 'https://lit-lowlands-70936.herokuapp.com/funds'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllCausesData(data))
    }, [])
    return (
        <div>
            <Header></Header>
            <div>
            <Col className='page-banner text-white fw-bold px-5 py-3'>
            <div className='text-center my-5'>
                    <p className='custom-text-warning '><i className="far fa-heart me-3"></i>Causes</p>
                    <h1 className='text-white fw-bold'>Our all Causes</h1>
                </div>
            </Col>
            </div>
            <Container className='custom-margin'>
               
                <Row xs={12} md={3} className="g-4">
                    {
                        allCausesData.map(causes => <SingleCauses causes={causes} key={causes.id}></SingleCauses>)
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default AllCauses;