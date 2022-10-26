import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from './Courses';

const CourseDetail = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        // <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3'>
        //     {
        //         Courses.map(item => <div key={item.id} className="card bg-base-100 shadow-xl">
        //             <figure><img src={item?.img} alt="" /></figure>
        //             <div className="card-body">
        //                 <h2 className="card-title">
        //                     {item?.name}
        //                 </h2>
        //                 <div className="card-actions justify-between">
        //                     <div className="badge badge-outline">Lectures:{item?.lectures}</div>
        //                     <div className="badge badge-outline">Quiz: {item?.quiz}</div>
        //                 </div>
        //             </div>
        //         </div>)
        //     }



        // </div>
        <div>
            <h1>welcome to Dev-Ex </h1>
            <img src="https://ibb.co/K22nZRQ" alt=""/>
            <div>
            <div className="card-body">
            
                         <h2 className="card-title">
                            {data?.name}
                            
                         </h2>
                        <div className="card-actions justify-between">
                            <div className="card bg-base-100 shadow-xl">
                            <figure><img src={data?.img} alt="" /></figure>
                            </div>
                            <div className="badge badge-outline">Details:{data?.details}</div>
                            <div className="badge badge-outline">Price:{data?.price}</div>
                            <div className="badge badge-outline">Lectures:{data?.lectures}</div>
                            <div className="badge badge-outline">Quiz: {data?.quiz}</div>
                        </div>
                     </div>
            </div>
            {data?.name}
            {data?.img}
            {data?.details}
            {data?.price}
            {data?.lectures}
            {data?.quiz}


        </div>
    );
};

export default CourseDetail;