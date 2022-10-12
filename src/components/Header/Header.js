import { faBars, faMoon, faSun, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { DarkContext } from '../../App';
import './Header.css'

const Header = ({handleDark}) => {

    const [display, setDisplay] = useState(true)
    const dark = useContext(DarkContext)

    const handeResponsive = () => {
        setDisplay(!display)
    }
    return (
        <div>
            <div className={`flex justify-around  items-center py-6 ${dark ? 'bg-gray-500' : 'bg-slate-300' }  `}>
                <div className=' flex justify-around items-center md:w-full'>
                    <div className="logo ">
                        <Link to='/'>
                            <h1 className={`text-2xl font-bold ${dark ? 'text-white': 'text-black'}`}>QuizX</h1>
                        </Link>
                    </div>
                    <div className={`   ${display ? 'hidden md:block' : 'block'}  md:block`}>
                        <ul className={`hidden items-center  md:flex  justify-around ${display ? 'flex' : ' response '} `} >
                            <li className={`pl-8 py-3  ${dark ? 'bg-gray-500' : 'bg-slate-300' }`}><Link className={`text-lg font-semibold ${dark ? 'text-gray-300 hover:text-white' : 'text-slate-800 hover:text-black' }   `} to="/home">Home</Link></li>
                            <li className={`pl-8 py-3  ${dark ? 'bg-gray-500' : 'bg-slate-300' }`}><Link className={`text-lg font-semibold ${dark ? 'text-gray-300 hover:text-white' : 'text-slate-800 hover:text-black' }   `} to="/topics">Topics</Link></li>
                            <li className={`pl-8 py-3  ${dark ? 'bg-gray-500' : 'bg-slate-300' }`}><Link className={`text-lg font-semibold ${dark ? 'text-gray-300 hover:text-white' : 'text-slate-800 hover:text-black' }   `} to="/stats">Statistics</Link></li>
                            <li className={`pl-8 py-3  ${dark ? 'bg-gray-500' : 'bg-slate-300' }`}><Link className={`text-lg font-semibold ${dark ? 'text-gray-300 hover:text-white' : 'text-slate-800 hover:text-black' }   `} to="/blogs">Blogs</Link></li>
                            <li className={`pl-8 py-3  ${dark ? 'bg-gray-500 text-white' : 'bg-slate-300' }`} onClick={handleDark}>
                                {
                                    dark ? <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
                                   : <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
                                }
                            </li>
                        
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