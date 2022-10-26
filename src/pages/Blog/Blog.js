import React from 'react';

const Blog = () => {
    return (
        <div class="grid grid-rows-4 grid-flow-row gap-4">
            <div className=" card w-96 bg-base-100 shadow-xl">
               <figure className="px-10 pt-10">
                    <img src="https://avatars.githubusercontent.com/u/25158?s=280&v=4" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">PHP</h2>
                    <p>PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites. It is integrated with a number of popular databases, including MySQL, PostgreSQL, Oracle, Sybase, Informix, and Microsoft SQL Server.?</p>
                    <div className="card-actions">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/130147272/original/f771598bfb790f953b81a36b17692a167dd62fb6/do-asp-dot-net-core-and-angular-web-application.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">ASP.NET</h2>
                <p>NET (dot NET) course is a software developing course, where the developers use dot Net framework and machine level languages to develop different software. It is a free open source platform to develop different types of software applications."?</p>
                <div className="card-actions">
                {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
            </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://examplecode.org/wp-content/uploads/2022/05/reactjs.png" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">React.js</h2>
                <p>React (also known as React. js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies."?</p>
                <div className="card-actions">
                {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;