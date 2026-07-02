import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header= () =>{
    return (
        <>
        <div>
            <a>Cooks Delight</a>
            <a>HOME</a>
            <a>RECIPES</a>
            <a>COOKING TIPS</a>
            <a>ABOUT US</a>
        </div>
        </>
    );
};

export default Header;