import React from 'react';
import SingleTopic from '../SingleTopic/SingleTopic';
import './QuizTopic.css'

const QuizTopic = ({topic}) => {
    
    return (
        <div className='block py-10 my-32 md:px-20 bg-gray-200 md:m-6 rounded'>
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