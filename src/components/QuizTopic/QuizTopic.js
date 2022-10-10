import React from 'react';
import SingleTopic from '../SingleTopic/SingleTopic';
import './QuizTopic.css'

const QuizTopic = ({topic}) => {
    console.log(topic);
    return (
        <div className='all-topics block py-32 md:px-20'>
            
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