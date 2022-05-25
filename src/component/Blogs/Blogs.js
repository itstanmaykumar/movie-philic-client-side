import React from 'react';

const Blogs = () => {
    return (
        <section className='container'>
            <div className="mx-auto px-3 pb-5 mx-3 my-5">
                <h1 className="my-4 p-3 text-center">Explore Our Recent Blogs</h1>
                <article className="p-5 rounded-10 shadow-lg">
                    <h3 className="mb-3">Difference between Javascript and Node.js -</h3>
                    <ul>
                        <li>Javascript is a programming language, but Node.js is not a programming language.</li>
                        <li>Javascript is used for writing scripts for websites and NodeJS is a  runtime environment for Javascript.</li>
                        <li>Javacript cannot be run outside the browser without the help of node.js.</li>
                        <li>Javascript is mainly used for client-side and node.js is mostly used for server-side</li>
                        <li>Javascript can add HTML, but node.js can't add HTML.</li>
                    </ul>
                </article>
                <article className="p-5 my-5 rounded-10 shadow-lg">
                    <h3 className="mb-3">Difference between SQL and NoSQL -</h3>
                    <ul>
                        <li>SQL is used for relational databases, but NoSQL is used for non-relational database.</li>
                        <li>SQL uses fixed or static or predefined schema, but NoSQL uses dynamic schema.</li>
                        <li>SQL cannot be used for hierarchical data storage, but NoSQL is best for hierarchical data storage.</li>
                        <li>SQL is best suited for complex queries and NoSQL is not so good best suited for complex queries.</li>
                        <li>SQL databases are vertically scalable, but NoSQL databases are horizontally scalable.</li>
                        <li>SQL databases are are table based, but NoSQL databases are are document, key-value, graph or wide-column stores.</li>
                    </ul>
                </article>
                <article className="p-5 my-5 rounded-10 shadow-lg">
                    <h3 className="mb-3">What is the purpose of JWT and how it works?</h3>
                    <h5>Purpose -</h5>
                    <p>JWT means JSON Web Token. It is an open standard used to share security information between two parties (a client and a server). It is a very popular standard which is used to trust and verify requests by using digital signatures, and to exchange information between parties.</p>
                    <h5>Working Procedure -</h5>
                    <p>A JWT is a string made up of three parts (header, payload, signature), separated by dots (.). Therefore, a JWT typically looks like the following. <br /><b>xxxxx.yyyyy.zzzzz</b></p>
                    <ul>
                        <li><b>header</b> contains contains the type of secret token and the signing algorithm.</li>
                        <li><b>payload</b> contains contains the claims.</li>
                        <li><b>signature</b> ensures that the token hasn’t been altered.</li>
                    </ul>
                    <p>When a user logs in or registers, the authentication server verifies the credentials and issues a jwt signed using a secret key. Then the resource server verifies the authenticity of the token using the secret key. It uses the signature to verify the information wasn't changed along the way.</p>

                </article>
            </div>
        </section>
    );
};

export default Blogs;