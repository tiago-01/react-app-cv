import { AiOutlineMail } from "react-icons/ai";
import ReactMarkDown from "react-markdown";
import { useEffect } from "react";
import { useInfo } from "../../context/infoContext";
import getEducationAndTraining from "../../api/educationAndTraining";
import getWorkExperience from "../../api/workExperience";
import getAboutMeInfo from "../../api/aboutMe";
import { HomePageStyle } from "../HomePage/style";

const EducationTrainingContent = () => {
  const {
    changeEducation,
    education,
    workExperience,
    changeWorkExperience,
    aboutMeInfo,
    changeAboutMeInfo,
    colorsTheme,
  } = useInfo();
  useEffect(() => {
    if (!aboutMeInfo.name) {
      const aboutme = getAboutMeInfo();
      changeAboutMeInfo(aboutme);
    }
    if (education.length === 0) {
      const educationAndTraining = getEducationAndTraining();
      changeEducation(educationAndTraining);
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
      {education.map((eachEducation, index) => (
        <div key={index} className="info-section">
          <div className="left-content">
            {index === 0 && <p>Education and training</p>}
            {eachEducation.startDate && eachEducation.endDate && (
              <p className="date">{`[ ${eachEducation.startDate} - ${eachEducation.endDate} ]`}</p>
            )}
          </div>
          <div className="right-content">
            {index === 0 && <div className="divider" />}
            <div className="text-wrapper">
              <p className="text title">{eachEducation.title}</p>
              <p className="text company">{eachEducation.place}</p>
              {eachEducation.websiteUrl && (
                <a className="text" href={eachEducation.websiteUrl}>
                  {eachEducation.websiteUrl}
                </a>
              )}
              {eachEducation.address && (
                <p className="text">
                  <strong>Address: </strong>
                  {eachEducation.address}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </HomePageStyle>
  );
};
export default EducationTrainingContent;
