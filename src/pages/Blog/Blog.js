import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">what is cors?</h2>
    <p>CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain?</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-secondary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h2>
    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.?</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-orange-500 text-primary-content">
  <div className="card-body">
    <h2 className="card-title">How does the private route work?</h2>
    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).?</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>

<div className="card w-96 bg-accent text-primary-content">
  <div className="card-body">
    <h2 className="card-title">What is Node? How does Node work?</h2>
    <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.?</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
        </div>
        // <div class="grid grid-rows-4 grid-flow-row gap-4">
        //     <div className=" card w-96 bg-base-100 shadow-xl">
        //        <figure className="px-10 pt-10">
        //             <img src="https://avatars.githubusercontent.com/u/25158?s=280&v=4" alt="Shoes" className="rounded-xl" />
        //         </figure>
        //         <div className="card-body items-center text-center">
        //             <h2 className="card-title">PHP</h2>
        //             <p>PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites. It is integrated with a number of popular databases, including MySQL, PostgreSQL, Oracle, Sybase, Informix, and Microsoft SQL Server.?</p>
        //             <div className="card-actions">
        //             {/* <button className="btn btn-primary">Buy Now</button> */}
        //             </div>
        //         </div>
        //     </div>
        //     <div className="card w-96 bg-base-100 shadow-xl">
        //     <figure className="px-10 pt-10">
        //         <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/130147272/original/f771598bfb790f953b81a36b17692a167dd62fb6/do-asp-dot-net-core-and-angular-web-application.jpg" alt="Shoes" className="rounded-xl" />
        //     </figure>
        //     <div className="card-body items-center text-center">
        //         <h2 className="card-title">ASP.NET</h2>
        //         <p>NET (dot NET) course is a software developing course, where the developers use dot Net framework and machine level languages to develop different software. It is a free open source platform to develop different types of software applications."?</p>
        //         <div className="card-actions">
        //         {/* <button className="btn btn-primary">Buy Now</button> */}
        //         </div>
        //     </div>
        //     </div>
        //     <div className="card w-96 bg-base-100 shadow-xl">
        //     <figure className="px-10 pt-10">
        //         <img src="https://examplecode.org/wp-content/uploads/2022/05/reactjs.png" alt="Shoes" className="rounded-xl" />
        //     </figure>
        //     <div className="card-body items-center text-center">
        //         <h2 className="card-title">React.js</h2>
        //         <p>React (also known as React. js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies."?</p>
        //         <div className="card-actions">
        //         {/* <button className="btn btn-primary">Buy Now</button> */}
        //         </div>
        //     </div>
        //     </div>
        // </div>
    );
};

export default Blog;