import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = ({ topic }) => {

    console.log(topic);




    return (
        <div className='py-28 md:m-10 flex flex-col-reverse md:flex-row md:px-10 bg-gray-200'>
            <div className="md:w-1/2 flex items-center justify-center flex-col">
                <h1 className="text-3xl font-semibold text-center">Statistics</h1>
                <br />
                <p className='font-medium text-lg'>Here is a chart for number of questions in our website.Get the mouse on the chart to see detail. Practice here and get skilled and be a tech genious.</p>
                <Link to='/topics'>
                <button className='bg-slate-600 font-bold py-2 px-4 my-6 rounded text-black hover:bg-black hover:text-gray-100'>Start Quiz</button>
                </Link>
            </div>
            <div className="flex  items-center justify-center md:w-1/2 ">
                <PieChart width={300} height={400}>
                    <Pie
                        dataKey="total"
                        isAnimationActive={false}
                        data={topic}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8814d1"
                        label
                    />
                    <Tooltip />
                </PieChart>
            </div>




        </div>
    );
};

export default Statistics;