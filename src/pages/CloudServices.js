import React from 'react';
import docs from '../images/docs.png';
import '../css/styles.css';
import '../index.css';
import { Link } from "react-router-dom";
import ChatPopUp from '../components/ChatPopUp';

export default function CloudServices() {
    return (
        <section>
            <ChatPopUp />
            <section className="docs-head bg-primary py-3">
                <div className="container grid">
                    <div>
                        <h1 className="xl">Cloud services</h1>
                        <p className="lead">
                            Eurosom Cloud is designed to be a secure platform that protects the confidentiality, integrity, and availability of customer data.
                        </p>
                    </div>
                    <img src={docs} alt="hosting" />
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
                        <h2>Eurosom cloud services</h2>
                        <p>Eurosom Cloud employs various security measures to ensure that customer data is protected from unauthorized access, use, disclosure, or modification.
                            One of the security measures employed by Eurosom Cloud is encryption. All data that is transmitted between Eurosom Cloud and its customers is encrypted using industry-standard protocols, such as HTTPS/TLS.
                            Eurosom Cloud also employs various access controls to ensure that only authorized personnel have access to customer data. The platform uses role-based access control (RBAC) to manage user access to resources and services. It also employs multi-factor authentication (MFA) to provide an additional layer of security.
                            In addition, Eurosom Cloud is compliant with various security and privacy standards, including ISO 27001, SOC 2, and GDPR. The platform undergoes regular security assessments and audits to ensure that it meets these standards.


                        </p>
                        <div className="alert alert-success">
                            <i className="fas fa-info"></i> Data stored in Eurosom Cloud's servers is also encrypted at rest using technologies like AES-256.
                        </div>
                        <h3>Pay-as-you-go.</h3>
                        <p>Regarding money, Eurosom Cloud offers flexible pricing options that enable customers to pay only for the resources and services they use. Customers can choose from various pricing models, such as pay-as-you-go, reserved instances, and spot instances. Eurosom Cloud also offers pricing calculators that allow customers to estimate their costs and optimize their spending.
                            Overall, Eurosom Cloud is a secure and cost-effective platform that provides customers with reliable data protection and flexible pricing options.</p>
                        <a href="https://c.eurosom.com" className="btn btn-primary">Pay-as-you-go</a>


                    </div>
                </div>
            </section>
        </section>
    );
}