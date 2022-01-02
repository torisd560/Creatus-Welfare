import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

const NotFound = () => {
    return (
        <div className='w-50 mx-auto text-center my-5'>
            <img src="https://previews.123rf.com/images/pa3x/pa3x1605/pa3x160500006/56425146-404-error-web-page-background-vector-design-page-not-found-template-with-typography-.jpg" alt="" className='img-fluid w-50' />
            <Link to='/'>
                <Button className='custom-button'>Back To Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;