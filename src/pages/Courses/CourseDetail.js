import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetail = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>welcome to Dev-Ex </h1>
            <img src="https://ibb.co/K22nZRQ" alt=""/>
            <div>

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