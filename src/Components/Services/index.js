import { useState } from "react";
import {Link} from "react-router-dom";

import Footer from "../Footer";
import "./index.css";
import pantopView from "../assets/pantop_view.png";
import kitchenDesignImser from "../assets/Services/kitchen_design_imser.jpg";
import sinkKitchen from "../assets/Services/sink_kitchen.jpg";
import bathroomServicesDesc from "../assets/Services/servicesimg_desc_bathroom.jpg";
import livingRoomServicesDesc from "../assets/Services/livingroom_services_desc.jpg";
import bedroomServicesDesc from "../assets/Services/servicesimg_desc_bedroom.jpg";
import diningServicesDesc from "../assets/Services/servicesimg_desc_dining.jpg";

const accordionData = [
  {
    title: "Kitchen Design",
    content: (
      <div className="container_description_accordian">
        <p className="para_desc_acc">
          A kitchen is not just a place to cook—it’s the heart of the home, where
          family and friends come together. At Zen Modular Kitchen, we specialize
          in crafting bespoke modular kitchens that blend elegance, convenience,
          and durability.
        </p>
        <h1 className="heading_main_desc_acc">🔹 What We Offer:</h1>
        <br />
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div className="container_texts_offers">
            <p className="para_desc_acc">
              🔸<span>Tailor-Made Modular Designs</span> – We create customized
              kitchen layouts that perfectly fit your space, whether you have a
              small apartment or a large villa.
            </p>
            <p className="para_desc_acc">
              🔸<span>High-Quality Materials</span> – Choose from plywood, MDF,
              acrylic, laminated finishes, and solid wood for cabinets and
              countertops.
            </p>
            <p className="para_desc_acc">
              🔸<span>Intelligent Storage Solutions</span> – Innovative pull-out
              drawers, corner units, tall cabinets, and concealed storage maximize
              efficiency.
            </p>
            <p className="para_desc_acc">
              🔸<span>Sleek & Stylish Finishes</span> – We offer a variety of
              matte, glossy, glass, and textured finishes to match your interior
              theme.
            </p>
            <p className="para_desc_acc">
              🔸<span>Ergonomic Workflows</span> – We ensure that the kitchen
              layout follows the golden triangle principle, making cooking
              seamless and comfortable.
            </p>
          </div>
          <img
            src={kitchenDesignImser}
            className="img_desc_services"
            alt="Kitchen Design"
          />
        </div>
        <br />
        <h1 className="heading_main_desc_acc">🔹 Our Kitchen Models Include:</h1>
        <br />
        <p className="para_desc_acc">
          🔸<span> L-Shaped Kitchens </span> – Ideal for compact spaces, ensuring
          better workflow.
        </p>
        <p className="para_desc_acc">
          🔸<span> U-Shaped Kitchens </span> – Perfect for large spaces, providing
          extra storage and movement ease.
        </p>
        <p className="para_desc_acc">
          🔸<span> Island Kitchens </span> – A modern and luxurious choice with
          extra counter space.
        </p>
        <p className="para_desc_acc">
          🔸<span> Parallel Kitchens </span> – Space-efficient, offering two long
          working areas.
        </p>
        <Link to='/contact' className="buttonLinks">
          <button className="getDreamKitchBUtton">
            Get Your Dream Kitchen <i className="fas fa-phone-alt"></i>
          </button>
        </Link>
      </div>
    ),
  },
  {
    title: "Kitchen Planner",
    content: (
      <div className="container_description_accordian">
        <p className="para_desc_acc">
          Planning a kitchen is a meticulous process that involves optimizing
          layout, storage, lighting, and materials for a seamless cooking
          experience. At Zen Modular Kitchen, we offer a comprehensive kitchen
          planning service to ensure your dream kitchen is efficient, stylish, and
          long-lasting.
        </p>
        <h1 className="heading_main_desc_acc">🔹 Kitchen Planning Approach:</h1>
        <br />
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div className="container_texts_offers">
            <p className="para_desc_acc">
              🔸<span>Tailor-Made Modular Designs</span> – We analyze your kitchen
              space and create functional layouts that make the best use of every
              inch.
            </p>
            <p className="para_desc_acc">
              🔸<span>High-Quality Materials</span> – Choose from durable
              materials like high-gloss acrylic, solid wood, and premium
              laminates.
            </p>
            <p className="para_desc_acc">
              🔸<span>Intelligent Storage Solutions</span> – Smart storage units,
              pull-out trays, and organizers to maximize space efficiency.
            </p>
            <p className="para_desc_acc">
              🔸<span>Sleek & Stylish Finishes</span> – A variety of matte,
              glossy, and textured finishes to complement your home interior.
            </p>
            <p className="para_desc_acc">
              🔸<span>Ergonomic Workflows</span> – Thoughtful placement of
              sockets, appliances, and plumbing for seamless kitchen operations.
            </p>
            <Link to='/contact'
              className="buttonLinks"
            >
              <button className="getDreamKitchBUtton">
                Get Your Dream Kitchen <i className="fas fa-phone-alt"></i>
              </button>
            </Link>
          </div>
          <img
            src={sinkKitchen}
            className="img_desc_services"
            alt="Kitchen Planner"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Bathroom Modelling",
    content: (
      <div className="container_description_accordian">
        <p className="para_desc_acc">
          A bathroom should be a sanctuary of relaxation and comfort while
          remaining highly functional. At Zen Modular Kitchen, we transform
          ordinary bathrooms into luxurious, spa-like spaces with modern designs
          and high-end materials.
        </p>
        <h1 className="heading_main_desc_acc">🔹 What We Offer:</h1>
        <br />
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div className="container_texts_offers">
            <p className="para_desc_acc">
              🔸<span>Custom Bathroom Layouts</span> – We design small, medium,
              and large bathrooms with tailored solutions for each space.
            </p>
            <p className="para_desc_acc">
              🔸<span>Premium Fixtures & Fittings</span> – High-quality
              washbasins, modern faucets, bathtubs, and shower panels that enhance
              elegance.
            </p>
            <p className="para_desc_acc">
              🔸<span>Waterproof & Anti-Slip Flooring</span> – Choose from ceramic
              tiles, vinyl, marble, or anti-skid flooring for safety and
              durability.
            </p>
            <p className="para_desc_acc">
              🔸<span>Space-Saving Vanities & Storage</span> – Sleek floating
              vanities, mirror cabinets, and hidden storage to keep essentials
              organized.
            </p>
            <p className="para_desc_acc">
              🔸<span>Mood Lighting & Ventilation</span> – We install LED lights,
              ambient lighting, and proper exhaust systems for a fresh and
              well-lit space.
            </p>
          </div>
          <img
            src={bathroomServicesDesc}
            className="img_desc_services"
            alt="Bathroom Modelling"
          />
        </div>
        <br />
        <h1 className="heading_main_desc_acc">🔹 Types of Bathroom Designs:</h1>
        <br />
        <p className="para_desc_acc">
          🔸<span> Contemporary Bathrooms </span> – Clean lines, neutral tones,
          and high-tech fittings.
        </p>
        <p className="para_desc_acc">
          🔸<span> Luxury Spa-Inspired Bathrooms </span> – Bathtubs, rainfall
          showers, and mood lighting for ultimate relaxation.
        </p>
        <p className="para_desc_acc">
          🔸<span> Minimalist Bathrooms </span> – Simple, clutter-free, and
          highly functional with smart storage.
        </p>
        <Link to='/contact' className="buttonLinks">
          <button className="getDreamKitchBUtton">
            Upgrade Your Bathroom <i className="fas fa-phone-alt"></i>
          </button>
        </Link>
      </div>
    ),
  },
  {
    title: "Living Room",
    content: (
      <div className="container_description_accordian">
        <p className="para_desc_acc">
          Your living room is the most important space in your home—it’s where you
          relax, entertain guests, and create memories. At Zen Modular Kitchen, we
          specialize in designing elegant, cozy, and functional living spaces that
          reflect your personality.
        </p>
        <h1 className="heading_main_desc_acc">🔹 What We Offer:</h1>
        <br />
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div className="container_texts_offers">
            <p className="para_desc_acc">
              🔸<span>Custom Sofa & Seating Arrangements</span> – Tailored
              L-shaped, sectional, or minimalistic seating based on space and
              comfort.
            </p>
            <p className="para_desc_acc">
              🔸<span>Stylish Wall & Ceiling Designs</span> – From textured walls
              and accent lighting to false ceilings and wood paneling.
            </p>
            <p className="para_desc_acc">
              🔸<span>Entertainment Units & Storage Solutions</span> – Sleek,
              space-saving TV panels, shelves, and hidden storage for a
              clutter-free look.
            </p>
            <p className="para_desc_acc">
              🔸<span>Smart Lighting Setup</span> – LED lighting, chandeliers,
              and mood lighting for a sophisticated ambiance.
            </p>
          </div>
          <img
            src={livingRoomServicesDesc}
            className="img_desc_services"
            alt="Living Room"
          />
        </div>
        <br />
        <Link to='/contact' className="buttonLinks">
          <button className="getDreamKitchBUtton">
            Book Living Room Designs <i className="fas fa-phone-alt"></i>
          </button>
        </Link>
      </div>
    ),
  },
  {
    title: "Bedroom Interior",
    content: (
      <div className="container_description_accordian">
        <p className="para_desc_acc">
          A bedroom is your personal sanctuary, and our designs create a perfect
          blend of luxury, relaxation, and functionality. We craft modern,
          classic, and minimalistic bedrooms with intelligent space utilization.
        </p>
        <h1 className="heading_main_desc_acc">🔹 What We Offer:</h1>
        <br />
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div className="container_texts_offers">
            <p className="para_desc_acc">
              🔸<span>Custom Bed & Wardrobe Designs</span> – Sliding wardrobes,
              walk-in closets, and space-saving beds.
            </p>
            <p className="para_desc_acc">
              🔸<span>Wall & Ceiling Décor</span> – Unique accent walls,
              paneling, and ceiling designs for a modern touch.
            </p>
            <p className="para_desc_acc">
              🔸<span>Soft & Ambient Lighting</span> – LED strips, bedside lamps,
              and dimmable lighting for a cozy atmosphere.
            </p>
            <p className="para_desc_acc">
              🔸<span>Work & Study Corners</span> – Integrated workspaces with
              ergonomic furniture.
            </p>
          </div>
          <img
            src={bedroomServicesDesc}
            className="img_desc_services"
            alt="Bedroom Interior"
          />
        </div>
        <br />
        <Link to='/contact' className="buttonLinks">
          <button className="getDreamKitchBUtton">
            Discover Bedroom Designs <i className="fas fa-phone-alt"></i>
          </button>
        </Link>
      </div>
    ),
  },
  {
    title: "Dining Area Design",
    content: (
      <div className="container_description_accordian">
        <p className="para_desc_acc">
          Your dining area is where you enjoy meals and create special moments
          with loved ones. We design functional yet stylish dining spaces that
          complement your home's aesthetics.
        </p>
        <h1 className="heading_main_desc_acc">🔹 What We Offer:</h1>
        <br />
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div className="container_texts_offers">
            <p className="para_desc_acc">
              🔸<span>Custom Dining Table & Seating Arrangements</span> – Elegant
              wooden, marble, or glass dining tables.
            </p>
            <p className="para_desc_acc">
              🔸<span>Mood Lighting & Chandelier Designs</span> – Enhance the
              ambiance with hanging pendant lights.
            </p>
            <p className="para_desc_acc">
              🔸<span>Storage & Sideboard Solutions</span> – Sleek cabinets and
              modular storage for extra convenience.
            </p>
            <p className="para_desc_acc">
              🔸<span>Decorative Elements</span> – Wall art, paneling, and indoor
              plants to add charm.
            </p>
          </div>
          <img
            src={diningServicesDesc}
            className="img_desc_services"
            alt="Dining Area Design"
          />
        </div>
        <br />
        <Link to='/contact' className="buttonLinks">
          <button className="getDreamKitchBUtton">
            View Dining Room Ideas <i className="fas fa-phone-alt"></i>
          </button>
        </Link>
      </div>
    ),
  },
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="container_projects_part_1_services">
        <h1 className="BreadCrmbs_header">Our Services</h1>
        <p className="BreadCrumbs_para">
         <Link to="/"className='linkName'> Home</Link> <span>/</span><Link to="/services" className='linkName'> Services</Link>
        </p>
      </div>
      <div className="container_body_services">
        <img
          src={pantopView}
          className="floatingImg_services"
          alt="Floating Kitchen View"
        />
        <div className="accordion" id="accordionExample">
          {accordionData.map((item, index) => (
            <div className="card_accordian" key={index}>
              <button
                className={`btn_acc button_normal_accordian ${
                  activeIndex === index ? "active" : ""
                }`}
                type="button"
                onClick={() => handleButtonClick(index)}
              >
                {item.title}
              </button>
            </div>
          ))}
        </div>
        <div id="descriptionText">{accordionData[activeIndex].content}</div>
      </div>
      <Footer />
    </>
  );
}

export default Services;