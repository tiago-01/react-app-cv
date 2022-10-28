import { AiOutlineMail } from "react-icons/ai";
import ReactMarkDown from "react-markdown";
import { useEffect } from "react";
import { useInfo } from "../../context/infoContext";
import getWorkExperience, {
  WorkExperiencesProps,
} from "../../api/workExperience";
import getAboutMeInfo from "../../api/aboutMe";
import { HomePageStyle } from "../HomePage/style";

const WorkExperienceContent = () => {
  const {
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
    if (workExperience.length === 0) {
      const workexperience = getWorkExperience();
      changeWorkExperience(workexperience);
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
      {workExperience.map((eachExperience, index) => {
        return (
          <div key={index} className="info-section">
            <div className="left-content">
              <p>{index === 0 && "work experience"}</p>
              <p className="date">time since start date</p>
              <p className="date">{`${eachExperience.diffYears} years`}</p>
              <p
                className="date"
                style={{ marginTop: 5 }}
              >{`${eachExperience.diffDays} days`}</p>
              <p
                className="date"
                style={{ marginTop: 5 }}
              >{`${eachExperience.diffHours} hours`}</p>
              <p
                className="date"
                style={{ marginTop: 5 }}
              >{`${eachExperience.diffMinutes} minutes`}</p>
              <p
                className="date"
                style={{ marginTop: 5 }}
              >{`${eachExperience.diffSeconds} seconds`}</p>
            </div>
            <div className="right-content">
              {index === 0 && <div className="divider" />}
              <div className="text-wrapper">
                <p className="text title">{eachExperience.role}</p>
                <p className="text company">{eachExperience.company}</p>
                <ReactMarkDown
                  children={eachExperience.markdownText}
                  className="text"
                />
              </div>
            </div>
          </div>
        );
      })}
    </HomePageStyle>
  );
};
export default WorkExperienceContent;
