import React from 'react';
import docs from '../images/docs.png';
import '../css/styles.css';
import '../index.css';
import { Link } from "react-router-dom";
import ChatPopUp from '../components/ChatPopUp';

export default function AIChatGpt() {
    return (
        <section>
            <ChatPopUp />
            <section className="docs-head bg-primary py-3">
                <div className="container grid">
                    <div>
                        <h1 className="xl">Eurosom ChatGPT </h1>
                        <p className="lead">
                            Eurosom's chatbot solutions powered by AI and Chatgpt make it easier for businesses to interact with their customers
                        </p>
                    </div>
                    <img src={docs} alt="" />
                </div>
            </section>

            {/* <!-- Docs main --> */}
            <section className="docs-main my-4">
                <div className="container grid">
                    <div className="card bg-light p-3">
                        <h3 className="my-2">Eurosom</h3>
                        <nav>
                            <ul>
                                <li> <Link to="/ai-chatgpt">AI Chatgpt</Link></li>
                                <li> <Link to="/cloud-services">Cloud services</Link></li>
                                <li> <Link to="/data-analytics">Data analytics</Link></li>
                            </ul>
                        </nav>
                        <h3 className="my-2">Access Eurosom Services</h3>
                        <nav>
                            <ul>
                                <li><a href="https://c.eurosom.com">Login Cloud</a></li>
                                <li><a href="https://chatgpt.eurosom.com">Login Chatgpt</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="card">
                        <h2>Artificial Intelligence</h2>
                        <p>Welcome to Eurosom, a leading provider of Artificial Intelligence (AI) solutions. Our goal is to bring the power of AI to organizations across Somalia and beyond, helping them to unlock new possibilities, increase productivity, and gain a competitive edge.
                            At Eurosom, we believe that AI has the potential to transform every industry, from healthcare to finance, agriculture to education. That's why we offer a range of AI services, tailored to meet the specific needs of our clients.

                            At Eurosom, we understand that AI can be complex and intimidating. That's why we take a consultative approach, working closely with our clients to ensure that they fully understand the potential of AI and how it can benefit their business. We pride ourselves on our commitment to customer service, ensuring that our clients always receive the support they need to succeed.
                            ..</p>
                        <div className="alert alert-success">
                            <i className="fas fa-info"></i> Artificial Intelligence (AI) solutions
                        </div>
                        <h3>Our consultative approach.</h3>
                        <p>
                            So, if you're ready to take your business to the next level with AI, contact Eurosom today. Let us show you how AI can transform your business and help you achieve your goals.
                        </p>
                        <a href="https://c.eurosom.com" className="btn btn-primary">Pay-as-you-go</a>


                    </div>
                </div>
            </section>
        </section>
    );
}