import React from 'react';
import docs from '../images/docs.png';
import '../css/styles.css';
import '../index.css';
import ChatPopUp from '../components/ChatPopUp';

export default function Solutions() {
    return (
      <section>
        <ChatPopUp />
        <section className="docs-head bg-primary py-3">
          <div className="container grid">
            <div>
              <h1 className="xl">Solutions</h1>
              <p className="lead">
                Eurosom Cloud provides customers with tools and services to help
                them enhance their own security measures. For example, the
                platform offers features such as network security groups,
                firewalls, and distributed denial-of-service (DDoS) protection
                to help customers secure their applications and services running
                on the cloud.
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
                    <a className="text-primary" href="ai-chatgpt">
                      AI Chatgpt
                    </a>
                  </li>
                  <li>
                    <a href="cloud-services">Cloud services</a>
                  </li>
                  <li>
                    <a href="data-analytics">Data analytics</a>
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
              <h2>Eurosom solutions </h2>
              <p>
                Eurosom cloud offers a chatbot solution powered by OpenAI's GPT
                that can understand and respond to natural language queries. In
                addition to chatbots, Eurosom cloud also offers other advanced
                data analytics solutions such as real-time data analytics,
                predictive analytics, and machine
              </p>
              <div className="alert alert-success">
                <i className="fas fa-info"></i> 
                Advanced data analytics solutions
              </div>
              <h3> Real-time data analytics</h3>
              <p>
                learning. With real-time data analytics, businesses can monitor
                and analyze data as it is generated, allowing them to make
                informed decisions quickly. Their predictive analytics solutions
                use machine learning algorithms to analyze historical data and
                make predictions about future outcomes, enabling organizations
                to take proactive steps to mitigate potential risks or
                capitalize on emerging trends. Eurosom's machine learning
                solutions allow businesses to automate processes and detect
                patterns and insights that may be difficult or impossible to
                identify manually
              </p>
              <a href="#" className="btn btn-primary">
                Eurosom cloud provides advanced data analytics solutions
                including OpenAI chatgpt.{" "}
              </a>

              <h3>Comprehensive solutions</h3>
              <ul>
                <li>
                  We offer a wide range of cloud and data analytics services
                  that can be tailored to meet your specific requirements.
                </li>
                <li>Node.js v12 or higher</li>
              </ul>

              <h3>Cutting-edge technology</h3>
              <p>
                We use the latest technologies to ensure our solutions are
                secure, scalable, and highly available.
              </p>
              <pre>
                <code>Expert team</code>
              </pre>
              <p>
                Our team of experienced cloud and data analytics professionals
                has the skills and knowledge to help you achieve your business
                objectives.
              </p>
              <pre>
                <code>Competitive pricing</code>
              </pre>
              <p>
                We offer competitive pricing for all our services, ensuring that
                you get value for your investment.
              </p>
            </div>
          </div>
        </section>
      </section>
    );
}