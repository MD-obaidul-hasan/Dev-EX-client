import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const Courses = () => {

    const courses = useLoaderData();
    // console.log(courses);

    return (
        <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-3'>
            {
                courses.map(item => <div key={item.id} className="card bg-base-100 shadow-xl">
                    <figure><img src={item?.img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item?.name}
                        </h2>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">Lectures:{item?.lectures}</div>
                            <div className="badge badge-outline">Quiz: {item?.quiz}</div>
                        </div>
                    </div>
                </div>)
            }



        </div>
    );
};

export default Courses;