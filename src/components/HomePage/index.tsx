import { HomePageStyle } from "./style";
import { AiOutlineMail } from "react-icons/ai";
import ReactMarkDown from "react-markdown";
import { useEffect } from "react";
import { useInfo } from "../../context/infoContext";
import getEducationAndTraining from "../../api/educationAndTraining";
import getWorkExperience from "../../api/workExperience";
import getAboutMeInfo from "../../api/aboutMe";

const HomePageContent = () => {
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
    if (workExperience.length === 0) {
      const workexperience = getWorkExperience();
      changeWorkExperience(workexperience);
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
      <div className="info-section">
        <div className="left-content">
          <p>About me</p>
        </div>
        <div className="right-content">
          <div className="divider" />
          <ReactMarkDown children={aboutMeInfo.markdownText} className="text" />
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
      {workExperience.map((eachExperience, index) => (
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
      ))}
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
export default HomePageContent;
