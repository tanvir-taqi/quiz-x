import React, { useContext } from 'react';
import { DarkContext } from '../../App';
import './Blogs.css'

const Blogs = () => {

    const dark = useContext(DarkContext)

    return (
        <div className={`my-32 px-10 md:mx-4 py-10 ${dark ? 'bg-gray-500 text-gray-900' : 'bg-slate-300' } rounded-lg`}>
            <h1 className="text-3xl text-center font-bold py-4">Articles</h1>
            <div className=" my-3 py-4 articles md:mx-6 mx-1 ">
                <div className=" bg-gray-400 article px-4 md:px-8 py-4">
                    <h1 className="text-xl text-center font-bold  my-3 ">What is the purpose of using React Router?</h1>
                    <br />
                    <p className='my-2 text-justify text-lg font-normal'>
                        React Router is used for developing single page web application.This single page means there will be multiple routes but in single page.SO the web applicaiton will go to multiple pages or page like components without loading the whole application.Along with this react router has some more features like nested routing or loader.It makes easier to develop a web application.
                    </p>

                </div>
                <div className=" bg-gray-400 article px-4 md:px-8 py-4">
                <h1 className="text-xl text-center font-bold  my-3 ">How does context API work?</h1>
                    <br />
                    <p className='my-2 text-justify text-lg font-normal'>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent.Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
                    </p>
                </div>
                <div className=" bg-gray-400 article px-4 md:px-8 py-4">
                    <h1 className="text-xl text-center font-bold  my-3">What is "useRef"?</h1>
                    <br />
                    <p className='my-2 text-justify text-lg font-normal'>
                        useRef() is a react hook. useRef() is useful for more than the ref attribute. useRef returns a mutable ref object whose current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. Smmary is we can store a initial value in a variable using useRef(). And then we can use this with any element for its current property or attribute 
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Blogs;