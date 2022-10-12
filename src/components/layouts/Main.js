import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = ({handleDark}) => {
    return (
        <div>
            <Header handleDark={handleDark}></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;