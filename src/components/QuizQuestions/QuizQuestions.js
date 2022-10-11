import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuestion/SingleQuestion';
import './QuizQuestion.css'


export const AnswerCount = createContext(0)

const QuizQuestions = () => {
    const quizQuestions = useLoaderData()
    
    const {questions} = quizQuestions.data

    const [count,setCount] = useState(0)

    


   
    return (
 <AnswerCount.Provider value={[count,setCount]}>
           <div className=' py-32 quiz-container'>
           
           <div className='question-container'>
           {
               questions.map(qs => <SingleQuestion
               key={qs.id}
               qsId = {qs.id}
               qs = {qs}
               ></SingleQuestion>)
            }
           </div>
           <div className='right-answer'>
            <h1>{count}</h1>
         
           </div>
      
       
    </div>
 </AnswerCount.Provider>
    );
};

export default QuizQuestions;