import React, { createContext, useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { DarkContext } from '../../App';
import SingleQuestion from '../SingleQuestion/SingleQuestion';
import './QuizQuestion.css'


export const AnswerCount = createContext(0)

const QuizQuestions = () => {
   const quizQuestions = useLoaderData()
  
   const dark = useContext(DarkContext)

   const { questions, name  } = quizQuestions.data

   const [count, setCount] = useState(0)





   return (
      <AnswerCount.Provider value={[count, setCount]}>
         <div className={`py-20`}>
            <div className=" mb-10">
               <h1 className="text-center font-extrabold text-3xl my-2">Welcome To the world of {name}</h1>
               <p className='text-center text-lg font-medium'>You Can only Choose Once. <br /> So Be Careful. <br />
                  There Is No Time Limit. <br /> Take Your Time</p>
            </div>

            <div className='   quiz-container '>


               <div className={`question-container mx-3 rounded-lg ${dark ? 'bg-gray-500' : 'bg-slate-400'}`}>

                  {
                     questions.map(qs => <SingleQuestion
                        key={qs.id}
                        qsId={qs.id}
                        qs={qs}
                     ></SingleQuestion>)
                  }
               </div>
               <div className={`right-answer relative text-black ${dark ? 'bg-gray-500' : 'bg-slate-400'}  text-center py-16`}>
                  <h1 className="text-xl font-bold mb-6">Result Is Here </h1>

                  <h1 className={`text-lg font-semibold  ${count ? 'block' : 'hidden'}`}>You Got {count} Out Of {questions.length}</h1>

               </div>


            </div>
         </div>
      </AnswerCount.Provider>
   );
};

export default QuizQuestions;