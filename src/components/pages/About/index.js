import "./index.css";
import profile from "../../../assets/images/profile.avif";
import Grow from "@mui/material/Grow";

const About = () => {
  return (
    <Grow in={true} timeout={700}>
      <div className="col col-12 about justify-content-center ">
        <h2>About Me</h2>
        <div className="row justify-content-center">
          <div className="col col-9">
            <div className="row justify-content-center">
              <img
                src={profile}
                alt="profile image"
                className="col"
              />
              <p className="col">
                I am a Full Stack Web Developer eager to hone his skills and
                learn new skills and technologies. Experienced with working in a
                team environment and communicating ideas with others. Focused,
                driven, and enjoys overcoming new challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Grow>
  );
};

export default About;
