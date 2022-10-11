import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const [display, setDisplay] = useState(true)

    const handeResponsive = () => {
        setDisplay(!display)
    }
    // flex-col md:flex-row absolute  bg-slate-400 w-full  inset-32  md:inset-0 md:relative 
    return (
        <div>
            <div className="flex justify-around  items-center py-6  bg-slate-300">
                <div className=' flex justify-around md:w-full'>
                    <div className="logo ">
                        <Link to='/'>
                            <h1 className="text-2xl font-bold">QuizX</h1>
                        </Link>
                    </div>
                    <div className={`   ${display ? 'hidden md:block' : 'block'}  md:block`}>
                        <ul className={`hidden  md:flex  justify-around ${display ? 'flex' : ' response '} `} >
                            <li className='pl-8 py-3 font-medium bg-slate-300 '><Link className='text-lg text-slate-800 hover:text-black' to="/home">Home</Link></li>
                            <li className='pl-8 py-3 font-medium bg-slate-300 '><Link className='text-lg text-slate-800 hover:text-black' to="/topics">Topics</Link></li>
                            <li className='pl-8 py-3 font-medium bg-slate-300 '><Link className='text-lg text-slate-800 hover:text-black' to="/stats">Statistics</Link></li>
                            <li className='pl-8 py-3 font-medium bg-slate-300 '><Link className='text-lg text-slate-800 hover:text-black' to="/blogs">Blogs</Link></li>
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