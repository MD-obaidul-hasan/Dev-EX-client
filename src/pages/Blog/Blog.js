import React from 'react';

const Blog = () => {
    return (
        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4 my-20'>
            <div className="card w-96 bg-blue-400 text-primary-content">
  <div className="card-body">
    <h2 className="card-title">what is cors?</h2>
    <p>CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain?</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>

<div className="card w-96 bg-pink-400 text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h2>
    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.?</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div>

<div className="card w-96 bg-orange-300 text-primary-content">
  <div className="card-body">
    <h2 className="card-title">How does the private route work?</h2>
    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).?</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>

<div className="card w-96 bg-accent text-primary-content">
  <div className="card-body">
    <h2 className="card-title">What is Node? How does Node work?</h2>
    <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.?</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
        </div>
        
    );
};

export default Blog;