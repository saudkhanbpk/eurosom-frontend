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
// import TopAnimation from "./TopAnimation";
// import '../pages/bannerAnimation'
import { useRef, useEffect, useState } from "react";

function ChatPopUp() {
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
    <div
      className=""
      id="myModal"
      // tabindex="-1"
      // aria-labelledby="exampleModalLabel"
      // aria-hidden="true"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "340px",
        zIndex: "2000",
      }}
    >
      {chatModal && (
        <div
          className=""
          style={{
            maxWidth: "340px",
          }}
        >
          <div
            className={`modal-content ${
              animate ? "animate-translate-and-fade-in" : ""
            }`}
          >
            <div
              className="modal-header d-block"
              // style="background-color: ;"
              style={{
                backgroundColor: "#4E419D",
              }}
            >
              <div>
                <div className="d-flex align-items-center">
                  <img
                    src={logoIcon}
                    alt=""
                    style={{
                      maxWidth: "50px",
                    }}
                  />
                  <h5
                    className="modal-title text-white ms-1"
                    id="exampleModalLabel"
                  >
                    Hi There
                  </h5>
                  <img
                    src={handIcon}
                    alt=""
                    style={{
                      maxWidth: "20px",
                    }}
                  />
                </div>
                <div className="mt-2">
                  <span className="whatsapp-icon">
                    <i className="bi bi-whatsapp"></i>
                  </span>
                  <span className="insta-icon ms-2">
                    <i className="bi bi-facebook"></i>
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="btn chatbot-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setChatModal(false);
                }}
              >
                X
              </button>
            </div>
            <div className="modal-body">
              <div className="chat-window">
                <img src={imageDP} alt="" className="dp-img" />
                <p className="bot-msg">
                  Hi welcome to Eurosom!
                  <br /> We're Online 24/7
                  <br />
                  How can we help you?
                </p>
              </div>
            </div>
            <div className="message">
              <textarea
                name=""
                id=""
                cols="10"
                rows="3"
                placeholder="Enter Your message"
                value={chatMessage}
                onChange={(e) => {
                  setChatMessage(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleChange(e);
                    setChatMessage("");
                  }
                }}
              />
              <button
                type="button"
                className="btn btn-chat-bot "
                onClick={(e) => {
                  handleChange(e);
                  setChatMessage("");
                }}
                style={{
                  transform: "rotate(45deg)",
                  backgroundColor: "transparent",
                  boxShadow:"none"
                  //   outline: "none",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#000"
                  class="bi bi-send"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                </svg>
              </button>
            </div>
          </div>
          {/* <!-- <div><i className="bi bi-chat-dots"></i></div> --> */}
        </div>
      )}
      <div
        onClick={() => {
          setChatModal(true);
        }}
        className="chatbot-msg-icon"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#fff"
            class="bi bi-chat-dots"
            viewBox="0 0 16 16"
          >
            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default ChatPopUp;
