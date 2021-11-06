import React from 'react';
import Banner from '../../components/Banner/Banner';
import NavBar from '../../components/NavBar/NavBar';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <>
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>
        </>
    );
};

export default Home;