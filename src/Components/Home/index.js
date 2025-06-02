import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import "./index.css"; // Assuming your index.css is in the same directory
import { InfinitySpin } from 'react-loader-spinner';
import HomeMiniModel from '../HomeMiniModel';
import { HiShieldCheck } from "react-icons/hi2";
/* Images */
import logoImage from "../assets/Logos/zen.png"; // Logo image
import kingImage from "../assets/king.png"; // King image
import hangingLampImage from "../assets/Hanging-Lamp-Transparent-Image.png"; // Hanging Lamp image
import whiteLightImage from "../assets/white-round-buld-hanginng -liight.png"; // White Light image
import kitchenChimneyImage from "../assets/Kitchen-Chimney.png"; // Kitchen Chimney image
import floatingArrowImage from "../assets/floating_arrow.png"; // Floating Arrow image
import chimneyImage from "../assets/Rotating/chimney.webp"; // Chimney image for slider
import dishwasherImage from "../assets/Rotating/dishwasher.webp"; // Dishwasher image for slider
import inductionCookTopImage from "../assets/Rotating/Induction_cook_top.webp"; // Induction Cook Top image for slider
import kitchenHobImage from "../assets/Rotating/kitchen hob.webp"; // Kitchen Hob image for slider
import modernSinkImage from "../assets/Rotating/modernsink.webp"; // Modern Sink image for slider
import owenImage from "../assets/Rotating/owen.webp"; // Owen image for slider
import refrigeratorImage from "../assets/Rotating/refrigirator.webp"; // Refrigerator image for slider
import mattFinishCupboardImage from "../assets/Rotating/matt_finich_cupboard.webp"; // Matt Finish Cupboard image for slider
import stripLightsImage from "../assets/Rotating/striplights.webp"; // Strip Lights image for slider
import tallPantryImage from "../assets/Rotating/tall_pantry_system_rack.webp"; // Tall Pantry image for slider
import bookAppointmentImage from "../assets/book_appointment_image.jpg"; // Book Appointment image
import bkAppointmentImage2 from "../assets/bk_appoint_image_2.jpg"; // Second Book Appointment image
import bbbRatingImage from "../assets/bbb_rating.png"; // BBB Rating image
import ribbonAwardImage from "../assets/ribbon_award_1.png"; // Ribbon Award image
import signatureImage from "../assets/signature_company_dir.png"; // Signature image
import backgroundVideo from "../assets/background_video_2.mp4"; // Background video
import advanceConsultationImage from "../assets/advance_modern_kitchen_consultation.jpg";
import zenImage2 from "../assets/Logos/modularkitchen2.png";
import loaderGif from '../assets/Loaders/loader.gif'; // Loader GIF
import Footer from "../Footer";

class Home extends React.Component {
  state = {
    showLoader: true,
    currentTextIndex: 0,
    formData: {
      userName: '',
      userEmail: '',
      userMessage: ''
    },
    formStatus: '', // To show success/error messages
  };

  texts = [
    'Warming up pixels...',
    'Assembling awesomeness...',
    'Polishing buttons...',
    'Loading vibes...',
    'Aligning design stars...',
    'Compiling creativity...',
    'Almost there, hang tight...',
  ];

  componentDidMount() {
    const loaderTimeout = setTimeout(() => {
      this.setState({ showLoader: false });
    }, 10);

    const textInterval = setInterval(() => {
      this.setState(prevState => ({
        currentTextIndex: (prevState.currentTextIndex + 1) % this.texts.length,
      }));
    }, 1000);

    // Initialize EmailJS with your actual Public Key
    emailjs.init('7L50TPphhuq4vsQtA');

    return () => {
      clearTimeout(loaderTimeout);
      clearInterval(textInterval);
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  };

  handleFormSubmit = async () => {
    const { formData } = this.state;

    // Basic client-side validation
    if (!formData.userName || !formData.userEmail) {
      this.setState({ formStatus: 'Please fill in all required fields.' });
      return;
    }

    // Email format validation
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.userEmail)) {
      this.setState({ formStatus: 'Please enter a valid email address.' });
      return;
    }

    try {
      // Send confirmation email to customer via EmailJS
      const customerEmailResponse = await emailjs.send('service_jqm8eb4', 'template_lxf17tw', {
        to_email: formData.userEmail, // Dynamic recipient
        userName: formData.userName,
        userEmail: formData.userEmail,
        userMessage: formData.userMessage
      });
      console.log('Customer Email Sent:', customerEmailResponse);

      // Send form details to srisakthi2821@gmail.com via EmailJS
      const adminEmailResponse = await emailjs.send('service_jqm8eb4', 'template_8envtw1', {
        userName: formData.userName,
        userEmail: formData.userEmail,
        userMessage: formData.userMessage
      });
      console.log('Admin Email Sent:', adminEmailResponse);

      this.setState({
        formStatus: 'Form submitted successfully! Our team will reach out shortly.',
        formData: { userName: '', userEmail: '', userMessage: '' }
      });
    } catch (error) {
      console.log('error', error); 
    }
  };

  render() {
    const { showLoader, currentTextIndex, formData, formStatus, errorDetails, errorCode } = this.state;

    return (
      <>
        {showLoader && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f3f4f7',
            zIndex: 9999,
          }}>
            <img src={loaderGif} className="loaderGif"/>
            <p style={{
              color: '#000',
              fontSize: '24px',
              marginTop: '20px',
              fontWeight: 'bold',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
            }}>
              {this.texts[currentTextIndex]}
            </p>
          </div>
        )}
        <div className="container_home">
          <video muted autoPlay loop className="background_video">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
          <div className="container_homeMainText">
          <h1 className="headingHomeMain"><span> Zen</span> Mod Design </h1>
          <h1 className="heading2_homeMain">We deliver <br/><span>Modern</span> comfort</h1>
          </div>
          <div className="subcontainer_home_modularkitchen">
          
            <h1 className="best_design_coimbatore_head">
              <img src={kingImage} alt="" className="imageBest_coimbatore" />
              Best Interior Design in Coimbatore
            </h1>
          </div>
        </div>
        <div className="home_maincontainer_2">
          <img src={hangingLampImage} className="hanginglight_container2_1" />
          <img src={whiteLightImage} className="whiteLight_hang_home" />
          <p className="paragraph_intro_home">
            Throughout the design process, we collaborate with each client to
            gain an understanding of their unique needs defining the success of
            each building.
          </p>
          <div className="container_2_homemain_subcontainer_1">
            <img
              src={kitchenChimneyImage}
              alt="chimney"
              className="home_chimneyImage"
            />
            <img src={floatingArrowImage} className="floatingArrow_home" />
            <div>
              <h1 className="heading_container_2_subcontainer_home">
                Modern &<br />
                Innovative Design
              </h1>
              <p className="para_container_2_subcontainer_home">
                Upgrade your kitchen with Modern & Innovative Design, blending
                sleek aesthetics, smart storage, and advanced functionality.
                Enjoy effortless organization and elegance, creating a stylish,
                efficient space for a seamless cooking experience.
              </p>
              <a href="./Services/index.html" className="buttonLinks">
                <button className="discover_moreButton_home">
                  Discover Modern Designs
                  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
            <div className="containe2_subcontainer_image"></div>
          </div>
        </div>
        <div className="banner">
          <h1 className="ourservices_heading_home">Our Services</h1>
          <div className="slider" style={{ "--quantity": 10 }}>
            <div className="item" style={{ "--position": 1 }}>
              <img src={chimneyImage} alt="" className="" />
              <h1 className="heading_items">Kitchen Chimney</h1>
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <img src={dishwasherImage} />
              <h1 className="heading_items">Dishwasher</h1>
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <img src={inductionCookTopImage} alt="" className="" />
              <h1 className="heading_items">Induction Cook Top</h1>
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <img src={kitchenHobImage} className="" />
              <h1 className="heading_items">Kitchen Hob</h1>
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <img src={modernSinkImage} alt="" className="" />
              <h1 className="heading_items">Modern Sink</h1>
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <img src={owenImage} alt="" className="" />
              <h1 className="heading_items">Digital Owen</h1>
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <img src={refrigeratorImage} alt="" className="" />
              <h1 className="heading_items">Digital Refrigirator</h1>
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <img src={mattFinishCupboardImage} alt="" className="" />
              <h1 className="heading_items">Matt Finish Cupboard</h1>
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <img src={stripLightsImage} alt="" className="" />
              <h1 className="heading_items">Let Strip Lights</h1>
            </div>
            <div className="item" style={{ "--position": 10 }}>
              <img src={tallPantryImage} alt="" className="" />
              <h1 className="heading_items">Tall Pantry Cupboard</h1>
            </div>
          </div>
        </div>
        <div className="container_3_home">
          <div className="container_item_services_benifits">
            <i className="iconServices fas fa-money-check-alt"></i>
            <div>
              <h1>Reasonable Prices</h1>
              <p>
                We produce furniture to fulfill needs of all people and offer it
                at affordable and fair prices
              </p>
            </div>
          </div>
          <div className="container_item_services_benifits">
            <i className="iconServices fab fa-think-peaks"></i>
            <div>
              <h1>Exclusive Design</h1>
              <p>
                Mixture of imagination, expeience and professionalism the secret
                of our design
              </p>
            </div>
          </div>
          <div className="container_item_services_benifits">
            <i className=" iconServices fas fa-user-friends"></i>
            <div>
              <h1>Professional Team</h1>
              <p>
                we are porud of ouramicable, professional and always developing
                team
              </p>
            </div>
          </div>
        </div>
        <div className="containerwarrantyHome_check">
          <img src={zenImage2} />
          <div className="containerPart2_warrenty_home">
            <h1 >Already a Customer?</h1>
            <p>Track your warranty anytime – hassle-free and cost-free!</p>
            <Link to="/warranty"> <button className="discover_moreButton_home bk_appoint_butn_home">Check Warranty <HiShieldCheck /></button></Link>
          </div>
        </div>
        <div className="why_choose_us_container_home">
          <div className="wcu_container_home_part1">
            <img src={kingImage} className="greedom_img" />
            <h1 className="heading_wcu">Why Choose Us</h1>
            <p className="paragraph_wcu  ">
              Best <span>Interior design</span> <br /> in Coimbatore
            </p>
            <p className="paragraph_wcu_smDevices">
              Best <span>Interior design</span> in Coimbatore
            </p>
          </div>
          <div className="wcu_container_home_part2">
            <div className="itemCOntainer_wcu_home container1_wcu_part2">
              <i className="fas fa-hand-holding-heart"></i>
              <h1>10 years warranty</h1>
            </div>
            <div className="itemCOntainer_wcu_home container2_wcu_part2">
              <i className="fas fa-tag"></i>
              <h1>Price match guarantee</h1>
            </div>
            <div className="itemCOntainer_wcu_home container3_wcu_part2">
              <i className="fas fa-calendar-alt"></i>
              <h1>45 day move-in guarantee</h1>
            </div>
            <div className="itemCOntainer_wcu_home container4_wcu_part2">
              <i className="fas fa-clipboard-check"></i>
              <h1>147 quality checks</h1>
            </div>
          </div>
        </div>
        <div className="bookYourAppointment_Container">
          <div className="book_yAppo_part1COntainer">
            <h1 className="bookYourAPp_heading">Book Your Appointment</h1>
            <h1 className="paragraph_wcu" id="para_ecu_smdev">
              Kitchen Design Consultation
            </h1>
            <p className="bookYourAPp_para">
              your kitchen is an expression of who you are, and its design
              should match your lifestyle. What you have traditional tastes or
              desir a modern feel. We can design your dream kitchen to suit any
              purpose
            </p>
            <a href="#appointment" className="buttonLinks">
              {" "}
              <button className="discover_moreButton_home bk_appoint_butn_home">
                Book Now
              </button>
            </a>
          </div>
          <img
            src={bookAppointmentImage}
            className="book_appnt_image_home book_appnt_image_home_sm_devices"
          />
        </div>
        <div className="bookYourAppointment_Container">
          <img src={bkAppointmentImage2} className="book_appnt_image_home" />
          <div className="book_yAppo_part1COntainer">
            <h1 className="bookYourAPp_heading">Best Selling Finishes</h1>
            <h1 className="paragraph_wcu" id="para_ecu_smdev">
              We use materials only from personally verified suppliers
            </h1>
          </div>
        </div>
        <div className="about_our_company_container_home">
          <div className="about_out_comp_home_part1">
            <h1 className="bookYourAPp_heading">About Our Company -</h1>
            <h1 className="paragraph_wcu">
              History Of <br />
              Our Company
            </h1>
            <div className="container_bbbRating">
              <img
                src={bbbRatingImage}
                alt=""
                className="bbb_rating_about_home"
              />
              <img
                src={ribbonAwardImage}
                alt=""
                className="bbb_rating_about_home"
              />
            </div>
          </div>
          <div className="about_part2_comp_home">
            <p className="para_about_part2">
              We are a locally owned and operated company with over 12+ years of
              industry experience.
            </p>
            <p className="subpara_about_home_part2">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. strategies to ensure
              proactive domination. At the end of the day,User generated content
              in real-time will have multiple touchpoints for offshoring.
            </p>
            <div className="about_comp_dir">
              <div>
                <h1 className="about_comp_dir_h1">Michale Jhon</h1>
                <p className="aboout_comp_dir_para">Company Director</p>
              </div>
              <img src={signatureImage} className="bbb_rating_about_home" />
            </div>
          </div>
        </div>
        <div className="container_consultation" id="appointment">
          <img
            src={advanceConsultationImage}
            alt=""
            className="consultation_image_home"
          />
          <div className="p2_consultation_container_Home">
            <p className="para_consultation_home">Get IN Touch</p>
            <h1 className="heading_consultatino_home">Book Your Consultation</h1>
            <div id="form1">
              <input
                type="text"
                placeholder="Your name"
                className="name_mail_form_consult_home"
                name="userName"
                value={formData.userName}
                onChange={this.handleInputChange}
              />
              <input
                type="email"
                placeholder="Your email address"
                className="name_mail_form_consult_home"
                name="userEmail"
                value={formData.userEmail}
                onChange={this.handleInputChange}
              />
              <br />
              <textarea
                placeholder="Message"
                className="name_mail_form_consult_home text_area_consult_home"
                name="userMessage"
                value={formData.userMessage}
                onChange={this.handleInputChange}
              ></textarea>
              <button
                type="button"
                className="discover_moreButton_home appoint_main_button"
                onClick={this.handleFormSubmit}
              >
                Book Your Appointment
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {formStatus && <p className="form-status">{formStatus}</p>}
              {errorDetails && <p className="form-error-details">Details: {errorDetails}</p>}
              {errorCode && <p className="form-error-code">Error Code: {errorCode}</p>}
            </div>
          </div>
          <div className="containerHomeMinimodel" style={{position:'relative',top:'-100px',left:'10%',height:'100vh'}}>
            <HomeMiniModel modelName="person_in_tuxedo"/>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}
export default Home;