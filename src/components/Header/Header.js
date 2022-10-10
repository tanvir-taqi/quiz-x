import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [display, setDisplay] = useState(true)

    const handeResponsive = () => {
        setDisplay(!display)
    }

    return (
        <div>
            <div className="flex justify-around w-full py-6  bg-slate-400">
                <div className=' flex justify-around md:w-full'>
                    <div className="logo">
                        <Link to='/'>
                            <h1 className="text-xl font-bold">QuizX</h1>
                        </Link>
                    </div>
                    <div className={`nav   ${display ? 'hidden' : 'block'} relative md:block`}>
                        <ul className={`mx-0 px-0 flex justify-around ${display ? 'flex-row ' : 'flex-col md:flex-row absolute  inset-y-24 md:inset-0 md:relative '} `} onClick={handeResponsive}>
                            <li className='md:mr-8 font-medium bg-slate-400 '><Link to="/home">Home</Link></li>
                            <li className='md:mr-8 font-medium bg-slate-400 '><Link to="/topics">Topics</Link></li>
                            <li className='md:mr-8 font-medium bg-slate-400 '><Link to="/stats">Statistics</Link></li>
                            <li className='md:mr-8 font-medium bg-slate-400 '><Link to="/blogs">Blogs</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="block md:hidden w-10 " onClick={handeResponsive}>

                    {
                        display ? <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> : <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                    }

                </div>

            </div>
        </div>
    );
};

export default Header;