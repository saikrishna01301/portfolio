import { useEffect } from "react";
import "./Skills.css";
import data from "../../Assets/skills.json";
const Skills = () => {
  return (
    <div className="skills__container">
      {data.map((skill) => {
        return (
          <div className="skill_box">
            <span className="skill--title">{skill.skill}</span>
            <div className="skill--bar">
              <span
                className="skill--percentage"
                style={{ width: `${skill.percentage}` }}
              >
                <span className="percentage--number">{skill.percentage}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
