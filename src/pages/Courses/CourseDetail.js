import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Courses from './Courses';
import Pdf from "react-to-pdf";

const CourseDetail = () => {
    const ref = React.createRef();

    const data = useLoaderData();
    console.log(data);
    return (
        
        <div>
            
            <h1>welcome to Dev-Ex </h1>
            <img src="https://ibb.co/K22nZRQ" alt=""/>
            <div>

            <div className="card-body">
            <div className='flex justify-between items-center bg-pink-300'>
                        <h2 className="  card-title">
                            {data?.name}
                            
                        </h2>
                         {/* <button className='btn btn-primary'>Downlord Pdf</button> */}
                         <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='btn btn-primary ' onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
            </div>
                         
                        <div ref={ref} className="card-actions justify-between">
                            <div className="card bg-base-100 shadow-xl">
                            <figure><img src={data?.img} alt="" /></figure>
                            </div>
                            <div className=' bg-sky-200'>Details:{data?.details}</div>
                            <div className=" bg-green-300 badge badge-outline">Price:{data?.price}</div>
                            <div className="  bg-orange-300 badge badge-outline">Lectures:{data?.lectures}</div>
                            <div className="bg-blue-500 badge badge-outline">Quiz: {data?.quiz}</div>
                            <div className="card-actions justify-end">
                                <Link to={`/CourseBuy/${data?.id}`} className="btn btn-primary">Buy Now</Link>
                             </div>
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