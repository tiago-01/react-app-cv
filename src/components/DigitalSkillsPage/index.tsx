import { AiOutlineMail } from "react-icons/ai";
import ReactMarkDown from "react-markdown";
import { useEffect } from "react";
import { useInfo } from "../../context/infoContext";
import getAboutMeInfo from "../../api/aboutMe";
import { HomePageStyle } from "../HomePage/style";

const DigitalSkillsContent = () => {
  const { aboutMeInfo, changeAboutMeInfo, colorsTheme } = useInfo();
  useEffect(() => {
    if (!aboutMeInfo.name) {
      const aboutme = getAboutMeInfo();
      changeAboutMeInfo(aboutme);
    }
  }, []);
  return (
    <HomePageStyle
      theme={{ titles: colorsTheme.titles, text: colorsTheme.text }}
    >
      <div className="top-section">
        {aboutMeInfo.photo && (
          <img className="photo" src={aboutMeInfo.photo} alt="Me" />
        )}
        <div className="info-wrapper">
          <h1 className="title">{aboutMeInfo.name}</h1>
          <div className="info-row">
            <AiOutlineMail
              style={{ marginRight: 15 }}
              size={22}
              color={colorsTheme.titles}
            />
            <p className="text">
              <strong>Email Address: </strong>
              <a href="mailto:tiagovscsilva@gmail.com">{aboutMeInfo.email}</a>
            </p>
          </div>
          <div className="info-row">
            <p className="text">
              <strong>Gender:</strong> {aboutMeInfo.gender}
            </p>
            <p className="text">
              <strong>Date of birth:</strong> {aboutMeInfo.birth}
            </p>
            <p className="text">
              <strong>Nationality:</strong> {aboutMeInfo.nationality}
            </p>
          </div>
        </div>
      </div>
      <div className="info-section">
        <div className="left-content">
          <p>digital skills</p>
        </div>
        <div className="right-content">
          <div className="divider" />
          <div className="text-wrapper">
            <p className="text">
              {aboutMeInfo.digitalSkills &&
                aboutMeInfo.digitalSkills.map((eachskill, index) =>
                  index < aboutMeInfo.digitalSkills.length - 1
                    ? eachskill + " | "
                    : eachskill
                )}
            </p>
          </div>
        </div>
      </div>
    </HomePageStyle>
  );
};
export default DigitalSkillsContent;
