import MyAvatar from "../../Assets/file.png";
import ReactLogo from "../../Assets/react.png";
import Javascript from "../../Assets/javascript.png";
import Node from "../../Assets/node.png";
import Html from "../../Assets/Html.png";
import "./Home.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

const Home = () => {
  return (
    <div style={{ position: "absolute", overflow: "hidden" }}>
      <img className="react--logo icon" src={ReactLogo} alt="logo"></img>
      <img className="js--logo icon" src={Javascript} alt="logo"></img>
      <img className="node--logo icon" src={Node} alt="logo"></img>
      <img className="html--logo icon" src={Html} alt="logo"></img>
      <div className="portfolio__container">
        <div className="portfolio__col--left">
          <h1 className="col__left--title">
            Hi, <span className="title--span">I'm Sai Krishna</span>
            <span>
              a <span className="specialization">Front End Developer.</span>
            </span>
          </h1>
          <p className="col__left--description">
            Aspiring professional pursuing a degree in Computer Science, with a
            strong focus on Front-end Development. Excels in relevant skills,
            including JavaScript, React.js, essential for the position.
          </p>
          <div className="icons__container">
            <a
              className="icon--link"
              href="https://github.com/saikrishna01301"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon sx={{ color: "#fff", fontSize: "25px" }} />
            </a>
            <a
              className="icon--link"
              href="https://www.linkedin.com/in/saikrishna01301/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon sx={{ color: "#fff", fontSize: "25px" }} />
            </a>
            <a
              className="icon--link"
              href="https://x.com/saikrishna01301"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon sx={{ color: "#fff", fontSize: "25px" }} />
            </a>
          </div>
        </div>
        <div className="portfolio__col--right">
          <img className="myAvatar" src={MyAvatar} alt="sai krishna" />
        </div>
      </div>
    </div>
  );
};

export default Home;
