import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

import Footer from "../Footer";
import "./index.css";
import kitchenImg from "../assets/Gallery/kitchen_img.jpg";
import homeInteriorImg from "../assets/Gallery/home_ineterior_galery.jpg";
import bathroomImg from "../assets/Gallery/gallery_bathroom.jpg";
import balconyImg from "../assets/Gallery/balcony_gallery.jpg";
import kitchen1 from "../assets/Kitchen/1.jpg";
import kitchen2 from "../assets/Kitchen/2.jpg";
import kitchen3 from "../assets/Kitchen/3.jpg";
import kitchen4 from "../assets/Kitchen/4.jpg";
import kitchen5 from "../assets/Kitchen/5.jpg";
import homeInterior1 from "../assets/HomeInterior/1.jpg";
import homeInterior2 from "../assets/HomeInterior/2.jpg";
import homeInterior3 from "../assets/HomeInterior/3.jpg";
import homeInterior4 from "../assets/HomeInterior/4.jpg";
import homeInterior5 from "../assets/HomeInterior/5.jpg";
import homeInterior6 from "../assets/HomeInterior/6.jpg";
import homeInterior7 from "../assets/HomeInterior/7.jpg";
import homeInterior8 from "../assets/HomeInterior/8.jpg";
import homeInterior9 from "../assets/HomeInterior/9.jpg";
import homeInterior10 from "../assets/HomeInterior/10.jpg";
import homeInterior11 from "../assets/HomeInterior/11.jpg";
import homeInterior12 from "../assets/HomeInterior/12.jpg";
import homeInterior13 from "../assets/HomeInterior/13.jpg";
import homeInterior14 from "../assets/HomeInterior/14.jpg";
import homeInterior15 from "../assets/HomeInterior/15.jpg";
import bathroom1 from "../assets/Bathroom/1.jpg";
import bathroom2 from "../assets/Bathroom/2.jpg";
import bathroom3 from "../assets/Bathroom/3.jpg";
import balcony1 from "../assets/Balcony/1.jpg";
import balcony2 from "../assets/Balcony/2.jpg";
import balcony3 from "../assets/Balcony/3.jpg";
import balcony4 from "../assets/Balcony/4.jpg";
import balcony5 from "../assets/Balcony/5.jpg";

const galleryData = [
  {
    id: "kitchen",
    title: "1. Kitchen Gallery",
    description:
      "A well-designed kitchen is the heart of every home, and at Zen Modular Kitchen, we create modular kitchens that seamlessly combine functionality with aesthetics. Our designs feature smart storage solutions, high-quality materials, and sleek finishes to suit various styles—from contemporary and minimalist to traditional and classic. Whether you prefer an open kitchen concept or a compact modular setup, our designs focus on maximizing space efficiency while enhancing visual appeal.",
    buttonText: "View Kitchen Gallery",
    modalTitle: "Our Kitchen Gallery",
    modalImages: [
      { src: kitchen2, className: "kitchen_img_gal" },
      { src: kitchen3, className: "kitchen_img_gal" },
      { src: kitchen4, className: "kitchen_img_gal" },
      { src: kitchen5, className: "kitchen_img_gal shortImg_modal" },
      { src: kitchen1, className: "kitchen_img_gal" },
    ],
    mainImage: kitchenImg,
  },
  {
    id: "homeAndBedroom",
    title: "2. Home & Bedroom Gallery",
    description:
      "Your home reflects your personality, and we at Zen Modular Kitchen specialize in creating interiors that exude warmth, elegance, and sophistication. Our home interior solutions include customized furniture, stylish wall panels, premium lighting setups, and space-saving designs that transform ordinary spaces into stunning, functional homes. Whether it's a modern, rustic, or luxurious theme, our designs bring harmony to your living environment.",
    buttonText: "View Home Interiors Gallery",
    modalTitle: "Our Home & Bedroom Gallery",
    modalImages: [
      { src: homeInterior1, className: "kitchen_img_gal" },
      { src: homeInterior2, className: "kitchen_img_gal" },
      { src: homeInterior3, className: "kitchen_img_gal" },
      { src: homeInterior4, className: "kitchen_img_gal" },
      { src: homeInterior5, className: "kitchen_img_gal" },
      { src: homeInterior6, className: "kitchen_img_gal" },
      { src: homeInterior7, className: "kitchen_img_gal" },
      { src: homeInterior8, className: "kitchen_img_gal" },
      { src: homeInterior9, className: "kitchen_img_gal" },
      { src: homeInterior10, className: "kitchen_img_gal" },
      { src: homeInterior11, className: "kitchen_img_gal" },
      { src: homeInterior12, className: "kitchen_img_gal" },
      { src: homeInterior13, className: "kitchen_img_gal" },
      { src: homeInterior14, className: "kitchen_img_gal" },
      { src: homeInterior15, className: "kitchen_img_gal" },
    ],
    mainImage: homeInteriorImg,
  },
  {
    id: "bathroom",
    title: "3. Bathroom Gallery",
    description:
      "A bathroom should be more than just a functional space—it should be a sanctuary of relaxation and luxury. Our modular bathroom designs incorporate space-efficient storage, elegant fittings, anti-slip flooring, and waterproof cabinetry to create a refreshing and stylish environment. Whether you need a compact design for a small space or a luxurious spa-like retreat, our team ensures high-quality craftsmanship in every detail.",
    buttonText: "View Bathroom Gallery",
    modalTitle: "Our Bathroom Gallery",
    modalImages: [
      { src: bathroom1, className: "kitchen_img_gal" },
      { src: bathroom2, className: "kitchen_img_gal" },
      { src: bathroom3, className: "kitchen_img_gal" },
    ],
    mainImage: bathroomImg,
  },
  {
    id: "balcony",
    title: "4. Balcony Gallery",
    description:
      "Your balcony is an extension of your home, offering a perfect space for relaxation and fresh air. We design cozy, aesthetic, and functional balconies with features such as greenery arrangements, wooden flooring, stylish railing designs, and comfortable seating areas. Whether you want a modern, minimalist balcony or a lush, garden-style retreat, our designs maximize comfort while enhancing your home's appeal.",
    buttonText: "View Balcony Gallery",
    modalTitle: "Our Balcony Gallery",
    modalImages: [
      { src: balcony1, className: "kitchen_img_gal" },
      { src: balcony2, className: "kitchen_img_gal" },
      { src: balcony3, className: "kitchen_img_gal" },
      { src: balcony4, className: "kitchen_img_gal" },
      { src: balcony5, className: "kitchen_img_gal" },
    ],
    mainImage: balconyImg,
  },
];

function Gallery() {
  const [showModal, setShowModal] = useState({});

  const handleShow = (id) => {
    setShowModal((prev) => ({ ...prev, [id]: true }));
  };

  const handleClose = (id) => {
    setShowModal((prev) => ({ ...prev, [id]: false }));
  };

  return (
    <>
      <div className="container_projects_part_1_gallery">
        <h1 className="BreadCrmbs_header">Gallery</h1>
        <p className="BreadCrumbs_para">
         <Link to="/" className='linkName'> Home</Link> <span>/</span> <Link className='linkName' to="/gallery"> Our Gallery</Link>
        </p>
      </div>
      <div className="gallery_body_part">
        <h1 className="Heading_gallery_bodypart">
          Gallery<span>__</span>
        </h1>
        {galleryData.map((item) => (
          <div key={item.id} className="card_gallery_category">
            <div>
              <h1 className="heading_gallery_card">{item.title}</h1>
              <p className="para_gallery_card">{item.description}</p>
              <Button
                className="discover_moreButton_home"
                onClick={() => handleShow(item.id)}
              >
                {item.buttonText} <i className="far fa-sm fa-eye"></i>
              </Button>
              <Modal
                show={showModal[item.id] || false}
                onHide={() => handleClose(item.id)}
                size="lg"
                scrollable={item.id === "homeAndBedroom" || item.id === "balcony"}
                aria-labelledby={`${item.id}-modal-label`}
              >
                <Modal.Header className="modal-header">
                  <Modal.Title id={`${item.id}-modal-label`}>
                    {item.modalTitle}
                  </Modal.Title>
                  <Button
                    variant="link"
                    className="close"
                    onClick={() => handleClose(item.id)}
                  >
                    <span aria-hidden="true">×</span>
                  </Button>
                </Modal.Header>
                <Modal.Body className="modal-body">
                  {item.modalImages.map((img, index) => (
                    <img
                      key={index}
                      src={img.src}
                      className={img.className}
                      alt={`${item.modalTitle} ${index + 1}`}
                    />
                  ))}
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    className="discover_moreButton_home"
                    onClick={() => handleClose(item.id)}
                  >
                    Close {item.title.split(". ")[1]}
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <img
              className="image_gallery_img_main"
              src={item.mainImage}
              alt={item.title}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Gallery;