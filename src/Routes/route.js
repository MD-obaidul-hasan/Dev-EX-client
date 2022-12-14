import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import CourseBuy from "../pages/Courses/CourseBuy";
import CourseDetail from "../pages/Courses/CourseDetail";
import Courses from "../pages/Courses/Courses";
import Sidebar from "../pages/Courses/Sidebar";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Login from "../pages/logins/Login/Login";
import Register from "../pages/logins/register/Register";
import PrivateRoute from "./privateRoute/PrivateRoute";


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
                loader: () => fetch(`https://dev-ex-server.vercel.app/courses`),
                children: [
                    {
                        index: true,
                        element: <Courses />,
                        loader: () => fetch(`https://dev-ex-server.vercel.app/courses`),
                    },
                    {
                        path: '/courses/:id',
                        element: <CourseDetail />,
                        loader: ({ params }) => fetch(`https://dev-ex-server.vercel.app/course/${params.id}`)
                    },
                    // {
                    //     path: '/Courses/:id',
                    //     element: <PrivateRoute> <CourseDetail /> </PrivateRoute>
                    // // loader: ({ params }) => fetch(`https://dev-ex-server.vercel.app/course/${params.id}`)
                    // }
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
            {
                path: '/CourseBuy/:id',
                element: <PrivateRoute> <CourseBuy /> </PrivateRoute>,
            loader: ({ params }) => fetch(`https://dev-ex-server.vercel.app/course/${params.id}`)
            }
        ]
    },
]);