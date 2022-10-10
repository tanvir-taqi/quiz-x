import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="flex justify-around py-6 bg-slate-400">
                <div className="logo">
                    <Link to='/'>
                        <h1 className="text-xl font-bold">QuizX</h1>
                    </Link>
                </div>
                <div className="nav">
                    <ul className='flex justify-around '>
                        <li className='mr-8 font-medium '><Link to="/home">Home</Link></li>
                        <li className='mr-8 font-medium '><Link to="/topics">Topics</Link></li>
                        <li className='mr-8 font-medium '><Link to="/stats">Statistics</Link></li>
                        <li className='mr-8 font-medium '><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Header;