import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='h-28 flex justify-between bg-blue'>
            <div className='text-6xl my-auto mx-32'><Link to='/'>brom.ru</Link></div>
        </div>
    );
};

export default Header;