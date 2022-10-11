import { faEye, faEyeSlash,  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import Option from '../Option/Option';
import { AnswerCount } from '../QuizQuestions/QuizQuestions';

const SingleQuestion = ({ qs }) => {

    const [count,setCount] = useContext(AnswerCount);
    
   
    const { question, correctAnswer, options } = qs
    const [rightAnswer, setRightAnswer] = useState('')
    const [ansColor , setAnsCOlor] = useState(false)
    const [answerClick , setAnswerClick] = useState(false)
    const [eye ,  setEye ] = useState(false)
    
   
const handleAnswer = (answer)=>{
    setAnswerClick(true)

    if(!answerClick){
        if(answer === correctAnswer){
            setAnsCOlor(true)
            setRightAnswer(`You Are Right!!!`)
            setCount(count + 1)
        }else{
            setAnsCOlor(false)
            setRightAnswer('Sorry Bro!! Try Again some time...')
        }
    }else{
        return
    }

    
}

   
    return (
        <div  className='border border-gray-700 p-3 rounded-lg'>
            <h1 className="text-center text-lg font-medium">{question}</h1>
            <div className='flex flex-col justify-start'>

            {
                
                options.map(option => <Option 
                     key={options.indexOf(option)}
                     handleAnswer = {handleAnswer}
                      option={option}></Option>)
            }
            </div>
            <div className='p-3 text-end ' onClick={()=>setEye(!eye)} >
                {
                    eye ? <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> :<FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
                }
            </div>
            <div className={`text-center   ${ansColor ? 'bg-green-300 ': 'bg-red-600 '}`}>
            {rightAnswer}
            </div>
            <div className={`${eye ? 'block' : 'hidden'} text-center py-2`}>
                <h1>Correct Answer is : {correctAnswer}</h1>
            </div>
        </div>
    );
};

export default SingleQuestion;