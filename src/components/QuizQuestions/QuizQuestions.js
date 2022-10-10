import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const QuizQuestions = () => {
    const quizQuestions = useLoaderData()
    const {questions} = quizQuestions.data
   
    return (
        <div>
           
                {
                   questions.map(qs => <SingleQuestion
                   key={qs.id}
                   qs = {qs}
                   ></SingleQuestion>)
                }
          
           
        </div>
    );
};

export default QuizQuestions;