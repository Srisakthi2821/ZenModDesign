import { Link } from "react-router-dom";
import { Component  } from "react";
import MiniModel from "../MiniModel";
import Footer from "../Footer";
import "./index.css";
import backgroundVideo from "../assets/background_video_2.mp4"; // Background video (adjust if needed)
import advanceConsultationImage from "../assets/advance_modern_kitchen_consultation.jpg";
import projectImage1 from "../assets/Projects/1.jpg";
import projectImage2 from "../assets/Projects/2.jpg";
import projectImage3 from "../assets/Projects/3.jpg";

class ProjectDetails extends Component {
  render() {
    return (
      <>
        <div className="container_projects_part_1_projects">
          <h1 className="BreadCrmbs_header">Project Details</h1>
          <p className="BreadCrumbs_para">
            <Link to="/" className="linkName">
              Home
            </Link>{" "}
            <span>/</span>
            <Link className="linkName" to="/project">
              Kitchen Cabinet
            </Link>
          </p>
        </div>

        <div className="container_bodyPart_projects">
            <h1 className="project_body_headingMain">
              Explore 3D Interior Work <span>___</span>
            </h1>

            <p className="project_body_para">
              &nbsp;&nbsp;&nbsp;&nbsp;Kitchen Models :
            </p>
            <div className="containerColl3dCards">
            
              <div id="uniqueCard1" className="uniqueCard">
                <Link to="/project/1">
                  <button className="viewButton">View Kitchen</button>
                </Link>
                <MiniModel modelName="game_die" />
              </div>

              <div id="uniqueCard2" className="uniqueCard">
                <Link to="/project/2">
                  <button className="viewButton">View Kitchen</button>
                </Link>
                <MiniModel modelName="japanese_castle" />
              </div>
              
              <div id="uniqueCard3" className="uniqueCard">
                <Link to="/project/3">
                  <button className="viewButton">View Kitchen</button>
                </Link>
                <MiniModel modelName="soccer_ball" />
              </div>
              </div>
              <p className="project_body_para">
              &nbsp;&nbsp;&nbsp;&nbsp;Bedroom Models :
            </p>
            
            <div className="containerColl3dCards">
            <div id="uniqueCard4" className="uniqueCard">
                <Link to="/project/4">
                  <button className="viewButton">View Bedroom</button>
                </Link>
                <MiniModel modelName="factory" />
              </div>
              <div id="uniqueCard5" className="uniqueCard">
                <Link to="/project/5">
                  <button className="viewButton">View Bedroom</button>
                </Link>
                <MiniModel modelName="person_gesturing_ok" />
              </div>
              <div id="uniqueCard6" className="uniqueCard">
                <Link to="/project/6">
                  <button className="viewButton">View Bedroom</button>
                </Link>
                <MiniModel modelName="school" />
              </div>


            </div>


            <p className="project_body_para">
              &nbsp;&nbsp;&nbsp;&nbsp;Living Room Models :
            </p>
            
            <div className="containerColl3dCards">
            <div id="uniqueCard7" className="uniqueCard">
                <Link to="/project/7">
                  <button className="viewButton">View Room</button>
                </Link>
                <MiniModel modelName="movie_camera" />
              </div>
              <div id="uniqueCard8" className="uniqueCard">
                <Link to="/project/8">
                  <button className="viewButton">View Room</button>
                </Link>
                <MiniModel modelName="person_in_tuxedo" />
              </div>
              <div id="uniqueCard9" className="uniqueCard">
                <Link to="/project/9">
                  <button className="viewButton">View Room</button>
                </Link>
                <MiniModel modelName="smiling_face_with_hearts" />
              </div>


            </div>
            
            </div>
        <Footer />
      </>
    );
  }
}

export default ProjectDetails;