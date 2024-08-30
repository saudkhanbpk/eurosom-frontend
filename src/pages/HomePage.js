import React from "react";
import "../css/styles.css";
import "../index.css";
import { Link } from "react-router-dom";
import chatGptLogo from "../images/logos/chatgpt.png";
import ErpOodoLogo from "../images/logos/eurosomodoo.png";
import powerBiLogo from "../images/logos/powerbi.png";
import topBannerImage from "../images/eurosomslider-01.jpg";
import handIcon from "../images/chatImage/two-icon.png";
import logoIcon from "../images/chatImage/download.png";
import imageDP from "../images/chatImage/image.png";
import { message } from "antd";
import TopAnimation from "./TopAnimation";
// import '../pages/bannerAnimation'
import { useRef, useEffect, useState } from "react";
import ChatPopUp from "../components/ChatPopUp";
import Slidebar from "../components/Slidebar";

export default function HomePage() {
  const [chatModal, setChatModal] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [animate, setAnimate] = useState(false);

  // const canvasRef = useRef(null);
  // const [ctx, setContext] = useState(null);

  // useEffect(() => {
  //     //i.e. value other than null or undefined
  //     if (canvasRef.current) {
  //         const canvas = canvasRef.current;
  //         const ctx = canvas.getContext("2d");
  //         setContext(ctx);

  //     }
  // }, []);

  useEffect(() => {
    // Open the modal when the component mounts
    setChatModal(true);
    setAnimate(true);
  }, []);

  const handleChange = (e) => {
    // console.log(chatMessage,"p")
    // console.log(chatMessage,"px")

    const encodedMessage = encodeURIComponent(chatMessage);
    if (chatMessage) {
      const url = `https://wa.me/252619255803?text=${encodedMessage}`;
      window.open(url, "_blank");
    } else {
      message.error("Please Enter Your Message");
    }
  };

  return (
    <>
      <main>
        <section className="showcase container-fluid1">
          <img className="topBannerImg" src={topBannerImage} alt="" />
          {/* <TopAnimation/> */}
          {/* <canvas id="c"></canvas> */}
          {/* <div className="showcase-form card">
            <h1 className="fw-bold">WhatsApp! </h1>
            <div className="mb-3">
              <div>
                <h2>
                  {" "}
                  <a
                    href="https://wa.me/252619255803"
                    className="btn btn-lg btn-dark"
                  >
                    <i className="fa fa-whatsapp"></i>&nbsp; &nbsp; +252 6192
                    55803{" "}
                  </a>
                </h2>
              </div>
              <div>
                <h2>
                  {" "}
                  <a
                    href="https://wa.me/252626137777"
                    className="btn btn-lg btn-dark"
                  >
                    <i className="fa fa-whatsapp"></i>&nbsp; &nbsp; +252 6261
                    37777{" "}
                  </a>
                </h2>
              </div>
              <div className="fs-4 fw-bold">Email: info@eurosom.com </div>
            </div>
          </div> */}
          {/* <div className="container grid">
                    <div className="showcase-text">
                        <h1>Fast, Secure & Reliable Cloud Services in Somalia.</h1>
                        <p>Welcome to Eurosom Cloud and Advanced Data Analytics, a leading cloud service provider that specializes in delivering cutting-edge solutions to our clients. Our services are designed to meet the unique needs of businesses of all sizes and industries, empowering them to leverage the power of the cloud and advanced data analytics to drive growth, efficiency, and innovation.</p>
                        <a href="services.html" className="btn btn-outline">Read More</a>
                    </div>
                </div> */}
                
        <ChatPopUp />
        </section>
        {/* <!-- Statistics Section--> */}
        <section className="stats">
          <div className="container">
            <h2 className="stats-heading text-center my-1">
              At Eurosom, we are committed to maintaining the highest level of
              cybersecurity in our data center Somalia.
            </h2>

            <div className="grid grid-3 text center my-4">
              <div>
                <div className="d-flex">
                  <i className="fas fa-server fa-3x"></i>
                  <div className="p-2">
                    <h3>Cloud Storage</h3>
                  </div>
                </div>
                <p className="text-secondary">
                  Eurosom is highly secured with advanced security measures such
                  as encryption, access control, and backup and recovery
                  options.
                </p>
              </div>
              <div>
                <div>
                  <div className="d-flex">
                    <i className="fas fa-upload fa-3x"></i>
                    <div className="p-2"></div>
                    <h3>Cloud Computing</h3>
                  </div>
                  <p className="text-secondary">
                    We offer a range of cloud-based services, including
                    infrastructure as a service (IaaS), platform as a service
                    (PaaS), and software as a service (SaaS), and more
                  </p>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <i className="fas fa-project-diagram fa-3x"></i>
                  <div className="p-2">
                    <h3>AI Machine learning</h3>
                  </div>
                </div>
                <p className="text-secondary">
                  Our team of experts has extensive experience in data
                  modelling, machine learning, and predictive analytics.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Command Line Section --> */}
        <section className="cli">
          <div className="container grid">
            <div className="card">
              <h3>Advanced Odoo Accounting</h3>
            </div>

            <div className="card">
              <h3>Advanced Data Analytics</h3>
            </div>
            <div className="card">
              <h3>Cloud Storage (icloud)</h3>
            </div>

            <div className="card">
              <h3>Cloud Computing </h3>
            </div>
            <div className="card">
              <h3>ChatGPT 4 Plus</h3>
            </div>
            <br />
          </div>
        </section>
        {/* <!-- Cloud Section --> */}
        <section className="cloud bg-primary my-2">
          <div className="container">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="fs-1 fw-bold">Mogadishu Cloud hosting</div>
              <div className="fs-6 px-4">
                At Eurosom, we take cybersecurity very seriously.
              </div>
              <div className="p-2">
                <Link to="/cloud-storage" className="btn btn-dark">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="languages">
          <h2 className="md text-center my-2">Supported Business Tools</h2>
          <div className="container flex">
            <div className="card">
              <h4>Chat GPT</h4>
              <img src={chatGptLogo} alt="chatgpt 4 plus" />
            </div>
            <div className="card">
              <h4>ERP Odoo</h4>
              <img src={ErpOodoLogo} alt="odoo accounting" />
            </div>

            <div className="card">
              <h4>Power BI</h4>
              <img src={powerBiLogo} alt="microsoft business intelligent" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
