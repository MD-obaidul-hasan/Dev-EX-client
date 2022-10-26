import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const Sidebar = () => {
    const courses = useLoaderData();
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                <Outlet />
            </div>


            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-accent text-base-content">
                    {
                        courses.map(item => <li key={item.id}><Link to={`/courses/${item?.id}`}>{item.name}</Link></li>)
                    }

                </ul>

            </div>
        </div>
    );
};

export default Sidebar;