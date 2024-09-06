import React, { useState } from "react";

const ArtificialQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "What is Flutter used for?",
      answer:
        "Flutter is an open-source UI framework developed by Google that empowers you to build native mobile applications using a single codebase. With Flutter, you utilize the Dart programming language and unlock the capability to create both iOS and Android apps simultaneously. Not only that, but you can also compile native applications for web and desktop platforms, opening up a world of limitless possibilities.",
    },
    {
      question:
        "What are the benefits of using Flutter for mobile app development?",
      answer:
        "Flutter provides a rich set of fully customizable widgets to create native interfaces in minutes. It also offers a high-performance rendering engine and allows for hot reload, making the development process faster and more efficient.",
    },
    {
      question: "What programming language does Flutter use?",
      answer:
        "Flutter uses Dart, a client-optimized language for fast apps on any platform. Dart is easy to learn, provides a productive development experience, and offers high performance on both iOS and Android devices.",
    },
    {
      question: "Is Flutter Good for App Development?",
      answer:
        "Yes, Flutter is widely regarded as an excellent choice for app development due to its ability to create high-performance, visually appealing applications with a single codebase that runs on multiple platforms.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-4 animate-move-left-to-right p-3">
      <div className="text-center item-center">
        <h4>Know more</h4>
        <h1 className="fw-bold text-primary">Frequently Asked Questions</h1>
      </div>
      {questions.map((item, index) => (
        <div
          key={index}
          className={`card1 border col-12 col-md-12 mb-3 card.active  shadow-sm ${
            openIndex === index ? "active" : ""
          }`}
        >
          <div className="card-body1 p-3">
            <div className="flex-grow-1" onClick={() => toggleAnswer(index)}>
              <h5 className="card-title  mb-0">{item.question}</h5>
              {openIndex === index && <p className=" mt-2">{item.answer}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtificialQuestions;
