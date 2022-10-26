import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import CourseDetail from "../pages/Courses/CourseDetail";
import Courses from "../pages/Courses/Courses";
import Sidebar from "../pages/Courses/Sidebar";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Login from "../pages/logins/Login/Login";
import Register from "../pages/logins/register/Register";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/faq',
                element: <Faq />
            },

            {
                path: '/courses',
                element: <Sidebar />,
                loader: () => fetch(`http://localhost:5000/courses`),
                children: [
                    {
                        index: true,
                        element: <Courses />,
                        loader: () => fetch(`http://localhost:5000/courses`),
                    },
                    {
                        path: '/courses/:id',
                        element: <CourseDetail />,
                        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
                    },
                ]
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
]);