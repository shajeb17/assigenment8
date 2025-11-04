import React from 'react';
import NavBar from '../Component/NavBar/NavBar';
import Herotop from '../Component/HeroSection/Herotop';
import Counter from '../Component/counter/Counter';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Herotop></Herotop>
            <Counter></Counter>
        </div>
    );
};

export default MainLayout;