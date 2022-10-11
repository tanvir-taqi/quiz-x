import React from 'react';
import SingleTopic from '../SingleTopic/SingleTopic';
import './QuizTopic.css'

const QuizTopic = ({topic}) => {
    
    return (
        <div className='all-topics block py-32 md:px-20 bg-gray-200 md:m-6 rounded'>
            
            {
                topic.map(qtopic => <SingleTopic
                key={qtopic.id}
                singleTopic = {qtopic}
               
                ></SingleTopic>)
            }
        </div>
    );
};

export default QuizTopic;