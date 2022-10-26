import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {

    const courses = useLoaderData();

    return (
        <div class="flex  flex-row ">
            <h4 >all courses: {courses.length}</h4>
            <div class="inline-grid grid-row-3 gap-4 basis-1/4">
                {
                    courses.map(course => <p key={course.id}>
                        <Link to={`/courses/${courses.id}`}>{course.name}</Link>

                    </p>)
                }
            </div>
            <div>
            </div>
        </div>
    );
};

export default Courses;