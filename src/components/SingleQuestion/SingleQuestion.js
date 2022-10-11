import { faEye, faEyeSlash, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import Option from '../Option/Option';
import { AnswerCount } from '../QuizQuestions/QuizQuestions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleQuestion = ({ qs }) => {

    const [count, setCount] = useContext(AnswerCount);


    const { question, correctAnswer, options } = qs
    const [rightAnswer, setRightAnswer] = useState('')
    const [ansColor, setAnsCOlor] = useState(false)
    const [answerClick, setAnswerClick] = useState(false)
    const [eye, setEye] = useState(false)


    const handleAnswer = (answer) => {
        setAnswerClick(true)

        if (!answerClick) {
            if (answer === correctAnswer) {
                setAnsCOlor(true)
                setRightAnswer(`You Are Right!!!`)
                setCount(count + 1)
                toast('You Are Right!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            } else {
                setAnsCOlor(false)
                setRightAnswer('Sorry Bro!! Try Again some time...')
                toast('Sorry Dear!!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } else {
            return
        }


    }


    return (
        <div className='border border-gray-700 bg-slate-300 my-6 p-3 rounded-lg'>
            <h1 className="text-center text-lg font-medium">{question}</h1>
            <div className='flex flex-col justify-start'>

                {

                    options.map(option => <Option
                        key={options.indexOf(option)}
                        handleAnswer={handleAnswer}
                        option={option}></Option>)
                }
            </div>
            <div className={`p-3 text-end ${eye ? 'text-red-600': 'text-black'}`} onClick={() => setEye(!eye)} >
                {
                    eye ? <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> : <FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
                }
            </div>
            <div className={`text-center font-bold text-lg  ${ansColor ? 'bg-green-400 ' : 'bg-red-500 '}`}>
                {rightAnswer}
            </div>
            <div className={`${eye ? 'block' : 'hidden'} text-center rounded text-lg font-semibold bg-slate-500 my-2 py-1`}>
                <h1>Correct Answer is : {correctAnswer}</h1>
            </div>
            <div>
                <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </div>
    );
};

export default SingleQuestion;