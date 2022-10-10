
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Main from './components/layouts/Main';
import QuizQuestions from './components/QuizQuestions/QuizQuestions';
import QuizTopic from './components/QuizTopic/QuizTopic';
import Statistics from './components/Statistics/Statistics';

function App() {

  const [topic, setTopic] = useState([])


  useEffect(()=>{
    fetch('https://openapi.programming-hero.com/api/quiz')
    .then(res => res.json())
    .then(data => setTopic(data.data))
  },[])

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/topics',
          element:<QuizTopic topic={topic} ></QuizTopic>
        },
        {
          path:'/stats',
          element:<Statistics></Statistics>
        },
        {
          path:'/blogs',
          element:<Blogs></Blogs>
        },
        {
          path:'/topics/:id',
          loader:({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
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
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
