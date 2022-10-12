import React, { useContext } from 'react';
import { DarkContext } from '../../App';
import SingleTopic from '../SingleTopic/SingleTopic';
import './QuizTopic.css'

const QuizTopic = ({topic}) => {
    console.log(topic);
    const dark = useContext(DarkContext)
    
    return (
        <div className={`block py-10 my-32 md:px-10  md:m-6 rounded ${dark ? 'bg-gray-500' : 'bg-slate-300' }`}>
            <div className='mb-6'>

            <h1 className="text-center text-2xl font-semibold">Start the Test.</h1>
            <p className="text-center text-lg font-medium ">You can choose any of this four topics</p>
            </div>
              <div className='all-topics '>
            
            {
                topic.map(qtopic => <SingleTopic
                key={qtopic.id}
                singleTopic = {qtopic}
               
                ></SingleTopic>)
            }
        </div>
        </div>

      
    );
};

export default QuizTopic;