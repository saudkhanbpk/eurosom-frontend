import React, { useState } from "react";

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setFormData({
      ...formData, // Spread the existing form data
      [name]: value, // Update the specific field by name
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted:", formData); // Log the form data
    // You can add additional form submission logic here, like sending data to an API
  };

  return (
    <div
      className="container-fluid mt-5 position-relative "
      style={{
        zIndex: 2,
        backgroundColor: "#e8f4ff",
        padding: "20px",
      }}
    >
      <h2 className="text-center fw-bold pt-5" >
        CONTACT US
      </h2>
      <h4 className="text-center text-primary fw-bolder fs-1 mb-4" style={{ color: "#007bff" }}>
        Supercharge Your Business with State-of-the-Art Services
      </h4>
      <div className="container">
      <div className="row ">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <input
                  type="text"
                  className="p-3 form-control"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <input
                  type="email"
                  className="p-3 form-control"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <input
                  type="tel"
                  className="p-3 form-control"
                  placeholder="Business Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <select
                  className="p-3 form-control"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Select a Subject</option>
                  <option value="Service Inquiry">Service Inquiry</option>
                  <option value="Support">Support</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Describe your requirement"
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-40 rounded-pill">
              Take The First Step
            </button>
          </form>
        </div>
        <div className="col-md-6">
          <div className="d-flex align-items-center mb-3">
            <i
              className="bi bi-envelope-fill me-2"
              style={{ color: "#007bff", fontSize: "20px" }}
            ></i>
            <span>Email: info@business.com</span>
          </div>
          <div className="d-flex align-items-center mb-3">
            <i
              className="bi bi-telephone-fill me-2"
              style={{ color: "#007bff", fontSize: "20px" }}
            ></i>
            <span>Contact Number: +44 7892 123456</span>
          </div>
          <div className="d-flex align-items-center mb-3">
            <i
              className="bi bi-geo-alt-fill me-2"
              style={{ color: "#007bff", fontSize: "20px" }}
            ></i>
            <span>Address: 19 Ash Place, Bidford-on-Avon, Warwickshire, B504GB, United Kingdom</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
