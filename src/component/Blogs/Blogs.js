import React from 'react';

const Blogs = () => {
    return (
        <section className='container'>
            <div className="mx-auto px-3 pb-5 mx-3 my-5">
                <h1 className="my-4 p-3 text-center">Explore Our Recent Blogs</h1>
                <article className="p-5 rounded-10 shadow-lg">
                    <h3 className="mb-3">Difference between Authentication and Authorization -</h3>
                    <p>Authentication & Authorization are both used to maintain the safety of the resources of an automated system. Despite the similar-sounding terms, authentication and authorization are very different process with respect to each other. Authentication validates if the users are whom they claim to be. On the other hand, Authorization gives permission to access the resourses of the system. Authentication identifies the user, but authorization identifies the permission of accessibility of that user. Authentication is done before authorization. Authorization works through passwords & credentials, but authentication works through settings maintained by security teams.</p>
                </article>
                <article className="p-5 my-5 rounded-10 shadow-lg">
                    <h3 className="mb-3">Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p>I using Firebase to host my website and to authenticate my website.</p>
                    <p>Firebase is a traditional Social Authentication method. It's is widely popular now-a-days. Though there exist some other methods of authentication. Such as -</p>
                    <ul>
                        <li>
                            <h5>Token Authentication</h5>
                            <p>In this method, a digitally encoded signature is used to authenticate and authorize the correct user.</p>
                        </li>
                        <li className='my-3'>
                            <h5>Standard Authentication</h5>
                            <p>This method helps users authenticate by entering their credentials using a user id and a strong password.</p>
                        </li>
                        <li className='my-3'>
                            <h5>Multi-Factor Authentication (MFA)</h5>
                            <p>It is a multi-layered authentication method which examines the identity of users for login or other access permission.</p>
                        </li>
                        <li >
                            <h5>Passwordless Authentication</h5>
                            <p>In this method, a magic link, fingerprint, PIN, or a secret token delivered via email or text message is used to authenticate and authorize the correct user.</p>
                        </li>
                    </ul>
                </article>
                <article className="p-5 my-5 rounded-10 shadow-lg">
                    <h3 className="mb-3">What other services does firebase provide other than authentication?</h3>
                    <div>
                        <p>There are many services which Firebase provides, Most useful of them is Authentication. But there are also some useful services that help you to develop high-quality mobile and web applications. Such as -</p>
                        <ul>
                            <li>
                                <h5>Cloud Messaging</h5>
                                <p>Firebase can implement notifications, and it is fast, reliable, and scalable.</p>
                            </li>
                            <li className='my-3'>
                                <h5>Dynamic Links</h5>
                                <p>Firebase can generate deep links which redirect user to your applications.</p>
                            </li>
                            <li className='my-3'>
                                <h5>Predictions</h5>
                                <p>Firebase can help in making predictions about your application decisions with the help of google's AI.</p>
                            </li>
                            <li >
                                <h5>Google Analytics</h5>
                                <p>Firebase can help in growing and managing your application. It can become helpful in tracking user demographics, behavior, purchasing patterns, revenue reports.</p>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Blogs;