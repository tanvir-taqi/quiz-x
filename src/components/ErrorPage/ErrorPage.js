import React from 'react';

const ErrorPage = () => {


    return (
        <div className='py-32 flex flex-col justify-center items-center'>
            <h1 className="text-4xl font-bold tracking-wider">404</h1>
            <img className='w-32 h-32' src="https://cdn-icons-png.flaticon.com/512/1182/1182367.png?w=740&t=st=1665514590~exp=1665515190~hmac=b81b44ea13c5a0ecca8a3fe2cb7d9cdfe190452245509d4a95b4ec72f1ec594e" alt="" />
            <h1 className="text-2xl font-semibold tracking-wider">Don't Be Sad!!</h1>
            <h1 className="text-xl font-semibold tracking-wider">I am sure you will find your way back.</h1>
        </div>
    );
};

export default ErrorPage;