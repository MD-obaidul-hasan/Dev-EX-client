import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from './Courses';

const CourseDetail = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        
        <div>
            <h1>welcome to Dev-Ex </h1>
            <img src="https://ibb.co/K22nZRQ" alt=""/>
            <div>
            <div className="card-body">
            
                         <h2 className=" bg-pink-300 card-title">
                            {data?.name}
                            
                         </h2>
                        <div className="card-actions justify-between">
                            <div className="card bg-base-100 shadow-xl">
                            <figure><img src={data?.img} alt="" /></figure>
                            </div>
                            <div className=' bg-sky-200'>Details:{data?.details}</div>
                            <div className=" bg-green-300 badge badge-outline">Price:{data?.price}</div>
                            <div className="  bg-orange-300 badge badge-outline">Lectures:{data?.lectures}</div>
                            <div className="bg-blue-500 badge badge-outline">Quiz: {data?.quiz}</div>
                        </div>
                     </div>
            </div>
            {/* {data?.name}
            {data?.img}
            {data?.details}
            {data?.price}
            {data?.lectures}
            {data?.quiz} */}


        </div>
    );
};

export default CourseDetail;