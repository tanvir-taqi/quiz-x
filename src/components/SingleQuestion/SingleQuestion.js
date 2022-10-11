import React, { useState } from 'react';
import Option from '../Option/Option';

const SingleQuestion = ({ qs }) => {
    const { question, correctAnswer, options } = qs
    const [answer, setAnswer] = useState('')

    const handleAnswer = (qanswer ) => {

       
        
        if (qanswer === correctAnswer) {
            setAnswer('bg-blue-400')
            // return
        } else {
            setAnswer('bg-red-400')
            // return
        }
        return
    }

   
    return (
        <div >
            <h1 className="text-center text-lg font-medium">{question}</h1>
            <div >

            {
                
                options.map(option => <Option handleAnswer={handleAnswer} answer={answer} key={options.indexOf(option)} option={option}></Option>)
            }
            </div>
        </div>
    );
};

export default SingleQuestion;