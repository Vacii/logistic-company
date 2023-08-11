import React, { useState } from "react";
import envelopeImage from "../assets/truck-preview.png";
import "../form.css";
import "../util.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [validation, setValidation] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newValidation = {
      name: formData.name.trim() === "",
      email:
        !/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/.test(
          formData.email
        ),
      subject: formData.subject.trim() === "",
      message: formData.message.trim() === "",
    };

    setValidation(newValidation);

    if (!Object.values(newValidation).some((v) => v)) {
      // Perform your form submission or other action here
      console.log("Form submitted:", formData);
    }
  };

  const handleInputFocus = (fieldName) => {
    setValidation((prevValidation) => ({
      ...prevValidation,
      [fieldName]: false,
    }));
  };

  return (
    <div className="contact1">
      <div className="container-contact1">
        <div className="contact1-pic js-tilt" data-tilt>
          <img src={envelopeImage} alt="envelope" />
        </div>

        <form className="contact1-form validate-form" onSubmit={handleSubmit}>
          <span className="contact1-form-title">Get in touch</span>

          <div
            className={`wrap-input1 validate-input ${
              validation.name ? "alert-validate" : ""
            }`}
            data-validate="Name is required"
          >
            <input
              className="input1"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus("name")}
            />
            <span className="shadow-input1"></span>
          </div>

          <div
            className={`wrap-input1 validate-input ${
              validation.email ? "alert-validate" : ""
            }`}
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              className="input1"
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus("email")}
            />
            <span className="shadow-input1"></span>
          </div>

          <div
            className={`wrap-input1 validate-input ${
              validation.subject ? "alert-validate" : ""
            }`}
            data-validate="Subject is required"
          >
            <input
              className="input1"
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus("subject")}
            />
            <span className="shadow-input1"></span>
          </div>

          <div
            className={`wrap-input1 validate-input ${
              validation.message ? "alert-validate" : ""
            }`}
            data-validate="Message is required"
          >
            <textarea
              className="input1"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              onFocus={() => handleInputFocus("message")}
            ></textarea>
            <span className="shadow-input1"></span>
          </div>

          <div className="container-contact1-form-btn">
            <button className="contact1-form-btn" type="submit">
              <span>
                Send Email
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
