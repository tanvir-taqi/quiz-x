
import { createContext, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Main from './components/layouts/Main';
import QuizQuestions from './components/QuizQuestions/QuizQuestions';
import QuizTopic from './components/QuizTopic/QuizTopic';
import Statistics from './components/Statistics/Statistics';

export const DarkContext = createContext(false)

function App() {

  const [topic, setTopic] = useState([])

  const [dark , setDark] = useState(false)

  const handleDark = ()=>{
    setDark(!dark)
    document.body.classList.toggle('light-theme')
    document.body.classList.toggle('dark-theme')
    
  }


  useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/quiz')
    .then(res => res.json())
    .then(data => setTopic(data.data))
   
  },[])

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main  handleDark={handleDark}></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home topic={topic}></Home>
        },
        {
          path:'/topics',
          element:<QuizTopic topic={topic} ></QuizTopic>
        },
        {
          path:'/stats',
          element:<Statistics topic= {topic}></Statistics>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'/topics/:id',
          loader:async({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element:<QuizQuestions ></QuizQuestions>
        },
      ]},
      {
        path:"*",
        element:<ErrorPage></ErrorPage>
      }
  ])
  return (
    <div >
      <DarkContext.Provider value={dark}>

        <RouterProvider router={router}></RouterProvider>
      </DarkContext.Provider>
    </div>
  );
}

export default App;
