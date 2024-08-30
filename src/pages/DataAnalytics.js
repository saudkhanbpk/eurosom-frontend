import React from 'react';
import docs from '../images/docs.png';
import '../css/styles.css';
import '../index.css';
import { Link } from "react-router-dom";
import ChatPopUp from '../components/ChatPopUp';

export default function DataAnalytics() {
    return (
      <section>
        <ChatPopUp />
        <section className="docs-head bg-primary py-3">
          <div className="container grid">
            <div>
              <h1 className="xl">Eurosom Data Anaytics </h1>
              <p className="lead">
                Eurosom is a smart cloud and data as a services provider that
                offers a comprehensive range of cloud solutions to businesses of
                all sizes.
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
                  <li>
                    <Link to="/ai-chatgpt">AI Chatgpt</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/cloud-services">Cloud services</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/data-analytics">Data analytics</Link>
                  </li>
                </ul>
              </nav>
              <h3 className="my-2">Access Eurosom Services</h3>
              <nav>
                <ul>
                  <li>
                    <a href="https://c.eurosom.com">Login Cloud</a>
                  </li>
                  <li>
                    <a href="https://chatgpt.eurosom.com">Login Chatgpt</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="card">
              <h2>Eurosom data analytics</h2>
              <p>
                Eurosom offers advanced data analysis solutions that help
                businesses make better decisions based on real-time insights.{" "}
              </p>
              <p>
                Here are some of the benefits of Eurosom's data analysis
                solutions:{" "}
              </p>
              <p>
                1. Real-time data analysis: Eurosom's real-time data analysis
                solutions enable businesses to monitor and analyze data as it is
                generated, allowing for quick decision-making and
                problem-solving.{" "}
              </p>
              <div className="alert alert-success">
                <i className="fas fa-info"></i> Machine learning
              </div>
              <h3>This can improve operational efficiency and productivity.</h3>
              <p>
                2. Predictive analytics: Eurosom's predictive analytics
                solutions use machine learning algorithms to analyze historical
                data and make predictions about future outcomes.
              </p>
              <a href="https://c.eurosom.com" className="btn btn-primary">
                Pay-as-you-go
              </a>
            </div>
          </div>
        </section>
      </section>
    );
}