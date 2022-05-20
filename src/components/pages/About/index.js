import "./index.css";
import profile from "../../../assets/images/profile.png";
import Grow from "@mui/material/Grow";

const About = () => {
  return (
    <Grow in={true} timeout={700}>
      <div className="col col-12 about justify-content-center ">
        <h2>About Me</h2>
        <div className="row justify-content-center">
          <div className="col col-9">
            <div className="row justify-content-center">
              <img src={profile} alt="Profile" className="col"></img>
              <p className="col">
                I am a Full Stack Developer who learned the MERN stack at the
                Rutgers University Coding Bootcamp. In just a few months I have
                already learned so much and am excited for what I will learn for
                years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Grow>
  );
};

export default About;
