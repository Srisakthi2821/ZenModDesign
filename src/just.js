{/* 
         <h1 className="project_body_headingMain">
            Project Description <span>___</span>
          </h1>
          <p className="project_nbody_para">
            At <span>Zen Modular Kitchen</span>, we specialize in designing and
            crafting modern modular kitchens that blend style, functionality, and
            durability. Based in Coimbatore, we take pride in being a leader in
            premium kitchen modeling, offering customized solutions tailored to
            your needs. Our expert team ensures seamless designs with high-quality
            materials, innovative storage solutions, and elegant aesthetics.
            Whether you prefer a sleek contemporary look or a classic modular
            setup, we bring your dream kitchen to life with precision and
            excellence.
          </p>
          <p className="project_nbody_para">
            We redefine kitchen spaces with innovative designs and high-quality
            craftsmanship. Located in Coimbatore, we offer stylish, functional,
            and customized modular kitchens that perfectly suit your lifestyle.
            With a focus on durability and elegance, we create spaces that make
            cooking a delightful experience.
          </p>
          <img
            src={projectImage1}
            className="project_page_image project_page_image_smallDevices"
            alt="Modular Kitchen Project"
          />
          <br />
          <br />
          <h1 className="project_body_headingMain">
            The Challenge in Installation <span>___</span>
          </h1>
          <p className="project_nbody_para">
            Installing a modular kitchen requires precision and expertise to
            ensure seamless integration of cabinets, countertops, and appliances.
            At Zen Modular Kitchen, we tackle challenges such as accurate space
            measurements, plumbing alignments, and electrical fittings with
            meticulous planning. Our team ensures a hassle-free installation
            process, delivering a perfectly functional and aesthetically pleasing
            kitchen tailored to your space.
          </p>
          <p className="project_nbody_para">
            Ensuring a flawless modular kitchen installation involves tackling
            space limitations, proper alignment, and seamless fittings. At Zen
            Modular Kitchen, our skilled team handles these challenges with
            precision, delivering a perfectly structured and functional kitchen.
          </p>
          <br />
          <br />
          <h1 className="project_body_headingMain">
            The Final View of Project <span>___</span>
          </h1>
          <p className="project_nbody_para">
            The completed modular kitchen reflects a perfect blend of style,
            functionality, and precision. At Zen Modular Kitchen, we ensure a
            flawless finish, with every element seamlessly integrated to create a
            modern, elegant, and highly efficient kitchen space.
          </p>
          <a href="../index.html#appointment" target="_self" className="buttonLinks">
            <button className="discover_moreButton_home">
              Book Now <i className="fas fa-phone-alt"></i>
            </button>
          </a>
        </div> 
        <div className="container_project_page_images">
          <img src={projectImage1} className="project_page_image" alt="Modular Kitchen Project 1" />
          <img src={projectImage2} className="project_page_image" alt="Modular Kitchen Project 2" />
          <img src={projectImage3} className="project_page_image" alt="Modular Kitchen Project 3" />
        </div>
        
          .project_nbody_para {
    font-size: 14px;
    color: rgb(128, 128, 128);
    font-weight: 300;
  }
  
  .project_nbody_para span {
    font-size: 18px;
    color: rgb(204, 204, 204);
    font-weight: 500;
  }
  
  .container_project_page_images {
    max-width: 20%;
  }
  
  .project_page_image {
    width: 300px;
    margin: 50px 0;
  }
  
  .project_page_image_smallDevices {
    display: none;
  }
  
  .discover_moreButton_home {
    position: relative;
    transition: all 0.3s ease-in-out;
    padding: 0.5rem 1.25rem;
    background-color: transparent;
    border-radius: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    gap: 10px;
    font-weight: bold;
    border: 1px solid rgba(102, 102, 102, 0.492);
    font-size: 22px;
    cursor: pointer;
  }
  
  .discover_moreButton_home:hover {
    transform: scale(1.05);
    border-color: rgba(255, 255, 255, 0.6);
  }
  
  .discover_moreButton_home:hover::before {
    animation: shine_button 1.5s ease-out infinite;
  }
  
  .discover_moreButton_home::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100%;
    background-image: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 30%,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0) 70%
    );
    top: 0;
    left: -100px;
    opacity: 0.6;
  }
  
  @keyframes shine_button {
    0% {
      left: -100px;
    }
    60% {
      left: 100%;
    }
    100% {
      left: 100%;
    }
  }
  
  @media only screen and (max-width: 660px) {
    body {
      font-size: 12px;
    }
  
    .container_projects_part_1_projects {
      min-height: 25vh;
      background-position: center;
      padding: 20px;
    }
  
    .BreadCrmbs_header {
      font-size: 30px;
    }
  
    .BreadCrumbs_para {
      font-size: 12px;
    }
  
    .BreadCrumbs_para span {
      font-size: 14px;
    }
  
    .container_bodyPart_projects {
      padding: 20px 10px;
      gap: 10px;
      flex-direction: column;
    }
  
    .container_writtens_project {
      width: 100%;
      gap: 10px;
    }
  
    .project_body_headingMain {
      font-size: 18px;
    }
  
    .project_body_headingMain span {
      font-size: 16px;
    }
  
    .project_nbody_para {
      font-size: 12px;
      line-height: 15px;
    }
  
    .project_nbody_para span {
      font-size: 14px;
    }
  
    .container_project_page_images {
      display: none;
    }
  
    .project_page_image_smallDevices {
      display: block;
      width: 100%;
      margin: 10px 0;
    }
  
    .discover_moreButton_home {
      font-size: 14px;
      padding: 5px 16px;
    }
  }*/}