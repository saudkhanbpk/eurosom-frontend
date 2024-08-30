import React from 'react';
import docs from '../images/docs.png';
import '../css/styles.css';
import '../index.css';
import { Link } from "react-router-dom";
import ChatPopUp from '../components/ChatPopUp';

export default function CloudStorage() {
    return (
        <section>
            <ChatPopUp />
            <section className="docs-head bg-primary py-3">
                <div className="container grid">
                    <div>
                        <h1 className="xl">Cloud Storage and security</h1>
                        <p className="lead">
                            At Eurosom, we take cybersecurity very seriously. We understand the importance of protecting our business, our customers, and our data from cyber threats.
                        </p>
                    </div>
                    <img src={docs} alt="cloud" />
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
                        <h2>Eurosom cloud storage</h2>
                        <p>Eurosom cloud storage is a highly secure and reliable storage solution that offers several benefits to businesses. </p>
                        <p>Here are some of the benefits:</p><p> 1. Scalable storage: Eurosom cloud storage is highly scalable and can adjust to meet the growing needs of businesses. As businesses grow and add more data or applications, they can easily expand their storage capacity without the need for additional hardware. </p>
                        <p> 2. Easy accessibility: Eurosom cloud storage is easily accessible from anywhere with an internet connection, making it easy for businesses to access their data and applications remotely from different devices.

                        </p>
                        <div className="alert alert-success">
                            <i className="fas fa-info"></i> Eurosom cloud storage is a cost-effective way of storing data because businesses only pay for the storage space they need.
                        </div>
                        <h3>Lorem, ipsum dolor.</h3>
                        <p>3. Improved data protection: Eurosom cloud storage uses advanced security measures such as encryption, access control, and backup and recovery options to protect data from unauthorized access, loss, or damage. This ensures data privacy and protection.</p><p> 4. Compliance regulations: Eurosom cloud storage adheres to strict compliance regulations such as GDPR and HIPAA, ensuring that businesses comply with data privacy laws and regulations. 5. Cost-effective:

                            Employee training: All Eurosom employees receive regular training on cybersecurity best practices, including safe browsing habits and password security. This helps to ensure that our employees are aware of potential threats and are equipped to protect our business from cyber attacks.
                        </p>
                        <a href="https://c.eurosom.com" className="btn btn-primary">Pay-as-you-go</a>


                    </div>
                </div>
            </section>
        </section>
    );
}