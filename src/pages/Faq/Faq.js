import React from 'react';

const Faq = () => {
    return (
        <div>
            <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 my-20'>
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
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://e7.pngegg.com/pngimages/498/98/png-clipart-wordpress-com-scalable-graphics-icon-wordpress-logo-emblem-trademark-thumbnail.png" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">WordPress</h2>
                    <p>WordPress is an open-source content management system (CMS). It's a popular tool for individuals without any coding experience who want to build websites and blogs. The software doesn't cost anything. Anyone can install, use, and modify it for free?</p>
                    <div className="card-actions">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                    </div>
                </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPTViRjJVarWMNfNKWBJcYDnQXuZtmGn94WX_q5CPH5OsinZln3fWkSAwvoXq4zEriXs&usqp=CAU" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Laravel</h2>
                    <p>Laravel is an open-source PHP framework, which is robust and easy to understand. It follows a model-view-controller design pattern. Laravel reuses the existing components of different frameworks which helps in creating a web application. The web application thus designed is more structured and pragmatic.?</p>
                    <div className="card-actions">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                    </div>
                </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://everythingiknows.com/wp-content/uploads/2022/04/node-js-new.png" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Node. js</h2>
                    <p>Node. js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications."?</p>
                    <div className="card-actions">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;