import React from 'react';
import Header from '../../Shared/Header/Header'
import Footer from '../../Shared/Footer/Footer'
import Login from '../Login'

const LoginItem = () => {
    return (
        <div>
            <Header></Header>
            <Login></Login>
            <Footer></Footer>
        </div>
    );
};

export default LoginItem;