
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/faq'>Faq</Link></li>



                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"
                > <a href="#" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-10" alt="Flowbite Logo" />
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dev-EX</span>
    </a>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/faq'>Faq</Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <div className='flex justify-center items-center gap-3'>
                            <div className="tooltip  tooltip-bottom" data-tip={user?.displayName}>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={user?.photoURL} alt='' />
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => logOut()} className='btn btn-primary'>Logout</button>
                        </div>
                        :
                        <Link to='/login' className="btn btn-primary">Login</Link>

                }
            </div>

        </div>
    );
};

export default Header;