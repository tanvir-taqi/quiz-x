import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom';

import './SingleTopic.css'

const SingleTopic = ({singleTopic}) => {
    const {name,total,id,logo} = singleTopic
   
    return (
        <div >
            <div className="topic-card p-6 border rounded bg-gray-400">
                <img src={logo} alt="" />
                <div className="content flex justify-around items-center py-3">
                    <h1 className={`font-lg font-bold text-black`}>{name}</h1>
                    <p className={`text-black `}>Total: {total}</p>
                    <Link to={`../topics/${id}`} className='bg-slate-600 p-2 rounded-lg  hover:bg-black hover:text-gray-200'>
                    <button className='font-bold' >Start Now <span><FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon></span></button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default SingleTopic;