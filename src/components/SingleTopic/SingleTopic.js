import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './SingleTopic.css'

const SingleTopic = ({singleTopic}) => {
    const {name,total,id,logo} = singleTopic
    return (
        <div >
            <div className="topic-card border rounded bg-gray-500">
                <img src={logo} alt="" />
                <div className="content flex justify-around py-3">
                    <h1 className='font-lg font-bold'>{name}</h1>
                    <p>Total: {total}</p>
                    <Link to={`../topics/${id}`}>
                    <button >Start Now <span><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon></span></button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default SingleTopic;