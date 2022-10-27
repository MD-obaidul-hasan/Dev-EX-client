import React from 'react';

const Home = () => {
    return (
        <div>               
            <h1 className='accent '>welcome to Dev-Ex</h1>
            <div className="card lg:card-side bg-base-10 shadow-l">
            
                <figure><img src="https://w7.pngwing.com/pngs/751/3/png-transparent-logo-php-html-others-text-trademark-logo-thumbnail.png" alt="Album"/></figure>
                {/* <figure><img src="https://ibb.co/K22nZRQ" alt="Album"/></figure> */}
                <figure><img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/130147272/original/f771598bfb790f953b81a36b17692a167dd62fb6/do-asp-dot-net-core-and-angular-web-application.jpg" alt="Album"/></figure>
                <figure><img src="https://e7.pngegg.com/pngimages/498/98/png-clipart-wordpress-com-scalable-graphics-icon-wordpress-logo-emblem-trademark-thumbnail.png" alt="Album"/></figure>
                <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxPTViRjJVarWMNfNKWBJcYDnQXuZtmGn94WX_q5CPH5OsinZln3fWkSAwvoXq4zEriXs&usqp=CAU" alt="Album"/></figure>
                <figure><img src="https://everythingiknows.com/wp-content/uploads/2022/04/node-js-new.png" alt="Album"/></figure>
                <figure><img src="https://examplecode.org/wp-content/uploads/2022/05/reactjs.png" alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">welcome to Dev-Ex</h2>
                    <p className='flex '>Dev-Ex give you oppertunity for build carear as a devoloper.
                                Here you can chose six devoloping language for build up your carear.
                                so lets go why so late.
                            </p>
                    {/* <p>Click the button to listen on Spotiwhy app.</p> */}
                    <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Listen</button> */}
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Home;