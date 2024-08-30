import React from 'react';
import server1 from '../images/server.png';
import server2 from '../images/server.png';
import '../css/styles.css';
import '../index.css';
import ChatPopUp from '../components/ChatPopUp';

export default function Services() {
    return (
        <section>
            <ChatPopUp />
<section className="features-head bg-primary py-3">
        <div className="container grid">
            <div>
                <h1 className="xl">Cloud services</h1>
                <p className="lead">
                    At Eurosom, we offer comprehensive data services that include processing, storing, securing, augmenting, and building dashboards. 
                </p>
            </div>
            <img src={server1} alt="servers" />
        </div>
    </section>

    {/* <!-- Sub head --> */}
    <section className="features-sub-head bg-light py-3">
        <div className="container grid">
            <div>
                <h1 className="md">Data Processing</h1>
                <p>
                   We offer data processing services that include cleaning, validating, transforming, and integrating data from multiple sources. We use various tools and technologies to ensure that the data is accurate, consistent, and ready for analysis.
                </p>
            </div>
            <img src={server2} alt="server" />
        </div>
    </section>

    {/* <!-- Features --> */}
    <section className="features-main my-2">
        <div className="container grid grid-3">
            <div className="card flex">
                <i className="fas fa-server fa-3x"></i>
				<p>Data Storing: We offer data storage solutions that include cloud-based storage, on-premise storage, and hybrid solutions. Our team will work with you to identify the most suitable storage solution for your business needs.</p>
            </div>
            <div className="card flex">
                <i className="fas fa-network-wired fa-3x"></i>
                <p>
                    Data Securing: We understand the importance of data security, and we take all necessary measures to protect your data from unauthorized access, theft, or loss. We use industry-standard security protocols and practices to ensure that your data is safe and secure.
                </p>
            </div>
            <div className="card flex">
                <i className="fas fa-laptop-code fa-3x"></i>
                <p>
                    Building Dashboard: We offer dashboard building services that help you visualize your data and make it easier to understand. 
                </p>
            </div>
            <div className="card flex">
                <i className="fas fa-database fa-3x"></i>
                <p>
                Data Augmenting: We offer data augmentation services that include enriching your existing data with external sources, such as social media, news feeds, and public databases. 
                </p>
            </div>
            <div className="card flex">
                <i className="fas fa-power-off fa-3x"></i>
                <p>
                   We understand the importance of protecting our business, our customers, and our data from cyber threats. 
                </p>
            </div>
            <div className="card flex">
                <i className="fas fa-upload fa-3x"></i>
                <p>
                    Data Processing: We offer data processing services that include cleaning, validating, transforming, and integrating data from multiple sources. 
                </p>
            </div>
        </div>
    </section>
    </section>
    
    );
}