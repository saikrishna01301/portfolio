import Nextshow from "../../Assets/nextshow.png";
import Crop from "../../Assets/croprecommendation.png";
import Madclothing from "../../Assets/madclothing.png";
import "./Projects.css";
import Divider from "@mui/material/Divider";
import ProjectData from "../../Assets/projects.json";

const imageMapper = {
  Crop: Crop,
  Madclothing: Madclothing,
};
const Projects = () => {
  return (
    <div className="project__container">
      <div className="currently__working">
        <h2 style={{ marginTop: "30px" }}>Currently Working On</h2>
        <div className="currently__project--card">
          <div className="project__card--image">
            <img src={Nextshow} alt="nextshow" className="card--img" />
          </div>
          <div className="project__card--info">
            <h3 className="card--heading">Nextshow</h3>
            <p className="card--info">
              NextShow is a movie ticket booking web app built with React.js,
              Material-UI (MUI), Express.js, and MongoDB. It enables users to
              browse movies, select showtimes, and book tickets with ease. The
              app provides a smooth and modern user experience, leveraging
              cutting-edge web technologies. Key features include movie
              listings, showtime selection, responsive design, and seamless
              booking functionality.
            </p>
            <span className="card--tech">
              Tech Stack: React.js, MUI, Express.js, MongoDB
            </span>
            <a className="card--link" href="https://nextshoww.netlify.app/">
              https://nextshoww.netlify.app/
            </a>
          </div>
        </div>
      </div>
      <Divider
        sx={{ backgroundColor: "#f1f1f1", width: "90%", margin: "25px auto" }}
      />
      {ProjectData.map((project, index) => {
        return (
          <div key={index}>
            <div className="project__list">
              <div className="currently__project--card">
                <div className="project__card--info">
                  <h3 className="card--heading">{project.heading}</h3>
                  <p className="card--info">{project.info}</p>
                  <span className="card--tech">
                    Tech Stack: {project.technologies}
                  </span>
                  <a className="card--link" href={project.link}>
                    {project.link}
                  </a>
                </div>
                <div className="project__card--image">
                  <img
                    src={imageMapper[project.image]}
                    alt={project.heading}
                    className="card--img"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
