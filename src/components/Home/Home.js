import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='py-32 relative m-10 flex justify-center items-center'>
            <div className="absolute inset-0 -z-40 home-img" ></div>
           <div className='md:py-24 py-4 px-2 text-gray-400'>
           <h1 className="text-4xl font-bold ">Welcome to <span className='text-gray-100'>QuizX</span></h1>
            <p className='py-2 my-1 text-lg tracking-wide'>Take Quizes And Keep Practicing</p>
            <p className='py-2 my-1 text-lg tracking-wide'>And Be a Developer</p>
            <Link to='/topics'>
            <button  className='py-2 my-1 px-4 border border-slate-800  rounded font-bold bg-slate-800 text-white hover:bg-black hover:text-gray-100'>Start Now? <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></button>
            </Link>
           </div>
        </div>
    );
};

export default Home;