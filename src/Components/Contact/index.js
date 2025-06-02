import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Footer from "../Footer";
import "./index.css";

const addressData = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Address :",
    content: "Gandhipuram, Coimbatore",
  },
  {
    icon: "fas fa-phone-alt",
    title: "Phone :",
    content: "+91 98375 37901, 89294 49822",
  },
  {
    icon: "fas fa-envelope",
    title: "Email :",
    content: "Zenmodularkitchen@gmail.com",
  },
];

function ContactUs() {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [errorDetails, setErrorDetails] = useState(""); // Fixed the state declaration
  const [errorCode, setErrorCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("");
    setErrorDetails("");
    setErrorCode("");

    // Basic client-side validation
    if (!formData.userName || !formData.userEmail) {
      setFormStatus("Please fill in all required fields.");
      return;
    }

    // Email format validation
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.userEmail)) {
      setFormStatus("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    try {
      // Send confirmation email to customer via EmailJS
      const customerEmailResponse = await emailjs.send(
        "service_jqm8eb4",
        "template_lxf17tw",
        {
          to_email: formData.userEmail,
          userName: formData.userName,
          userEmail: formData.userEmail,
          userMessage: formData.userMessage,
        },
        "7L50TPphhuq4vsQtA"
      );
      console.log("Customer Email Sent:", customerEmailResponse);

      // Send form details to srisakthi2821@gmail.com via EmailJS
      const adminEmailResponse = await emailjs.send(
        "service_jqm8eb4",
        "template_8envtw1",
        {
          userName: formData.userName,
          userEmail: formData.userEmail,
          userMessage: formData.userMessage,
        },
        "7L50TPphhuq4vsQtA"
      );
      console.log("Admin Email Sent:", adminEmailResponse);

      setFormStatus(
        "Form submitted successfully! Our team will reach out shortly."
      );
      setFormData({
        userName: "",
        userEmail: "",
        userMessage: "",
      });
    } catch (error) {
      setFormStatus("Error submitting form: " + error.message);
      setErrorDetails(error.details || "No additional details provided.");
      setErrorCode(error.code || "Unknown error code.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container_projects_part_1_contact">
        <h1 className="BreadCrmbs_header">Contact Us</h1>
        <p className="BreadCrumbs_para">
          <Link to="/" className="linkName">
            Home
          </Link>{" "}
          <span>/</span>{" "}
          <Link to="/contact" className="linkName">
            Contact Us
          </Link>
        </p>
        <div
          className="containerHomeMinimodel"
          style={{
            position: "absolute",
            top: "220px",
            right: "45%",
            height: "50vh",
          }}
        ></div>
      </div>
      <div className="body_contactus">
        <p className="subhead_contact">
          <span>___</span> Get In Touch
        </p>
        <h1 className="heading_contact_main">We Love To Hear From You</h1>
        <div className="content_contact" id="contactUsForm">
          <form className="form_contact" id="form2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name"
              name="userName"
              className="name_mail_form_consult_home"
              value={formData.userName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Your email"
              name="userEmail"
              className="name_mail_form_consult_home"
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Message"
              name="userMessage"
              className="name_mail_form_consult_home text_area_consult_home"
              value={formData.userMessage}
              onChange={handleChange}
              required
            ></textarea>
            <button
              type="submit"
              className="discover_moreButton_home"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Us a Message"}
              <i className="far fa-comment-dots"></i>
            </button>
            {formStatus && <p className="form-status">{formStatus}</p>}
            {errorDetails && (
              <p className="form-error-details">Details: {errorDetails}</p>
            )}
            {errorCode && (
              <p className="form-error-code">Error Code: {errorCode}</p>
            )}
          </form>
          <div className="container_our_address">
            <h1 className="heading_adddress">Our Address</h1>
            <p className="para_address_cont">
              Seamlessly connect with us for premier modular kitchen solutions.
              Experience top-tier customer service tailored to your needs.
            </p>
            {addressData.map((item, index) => (
              <div key={index} className="address_card_item_contact">
                <i className={item.icon}></i>
                <div>
                  <h1 className="address_head_card">{item.title}</h1>
                  <p className="para_card_address">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.4528412896184!2d76.99709297480958!3d11.079588689088197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7eb57bd1f15%3A0x71054541347cd5ab!2sCode%20Infinite%20IT%20Training%20institute%20%7C%20Python%20Full%20Stack%20%7C%20Java%20and%20Testing%20%7C%20Digital%20Marketing!5e0!3m2!1sen!2sin!4v1742046688460!5m2!1sen!2sin"
        className="map_contact"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map Location"
      ></iframe>
      <Footer />
    </>
  );
}

export default ContactUs;