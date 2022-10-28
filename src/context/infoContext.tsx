import Cookies from "js-cookie";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AboutMeProps } from "../api/aboutMe";
import { EducationProps } from "../api/educationAndTraining";
import { WorkExperiencesProps } from "../api/workExperience";

interface ColorsProps {
  titles: string;
  text: string;
  background: string;
  backgroundHeaderFooter: string;
}
interface InfoContextData {
  education: EducationProps[];
  changeEducation: (value: EducationProps[]) => void;
  workExperience: WorkExperiencesProps[];
  changeWorkExperience: (value: WorkExperiencesProps[]) => void;
  aboutMeInfo: AboutMeProps;
  changeAboutMeInfo: (value: AboutMeProps) => void;
  darkMode: boolean;
  changeDarkMode: (value: boolean) => void;
  colorsTheme: ColorsProps;
}
interface InfoProviderProps {
  children: ReactNode;
}
export const InfoContext = createContext({} as InfoContextData);

export const InfoProvider = ({ children }: InfoProviderProps) => {
  const [education, setEducation] = useState<EducationProps[]>([]);
  const [workExperience, setWorkExperience] = useState<WorkExperiencesProps[]>(
    []
  );
  const [aboutMeInfo, setAboutMeInfo] = useState<AboutMeProps>(
    {} as AboutMeProps
  );
  const [darkMode, setDarkMode] = useState(false);
  const [colorsTheme, setColorsTheme] = useState<ColorsProps>(
    Cookies.get("darkMode") === "false"
      ? {
          titles: "#1092ff",
          text: "#5b5b5b",
          background: "#fff",
          backgroundHeaderFooter: "#dfe9fb",
        }
      : {
          titles: "#fff",
          text: "#d6d1d1",
          background: "#000",
          backgroundHeaderFooter: "#1092ff",
        }
  );
  useEffect(() => {
    if (workExperience.length > 0) {
      const newWork: WorkExperiencesProps[] = [];
      const interval = setInterval(() => {
        workExperience.map((eachExperience) => {
          const datenow = new Date();
          const startdate = new Date(eachExperience.startDate);
          let year = datenow.getFullYear() - startdate.getFullYear();
          let month = datenow.getMonth() - startdate.getMonth();
          let days = datenow.getDate() - startdate.getDate();
          let hours = datenow.getHours() - startdate.getHours();
          let minutes = datenow.getMinutes() - startdate.getMinutes();
          let seconds = datenow.getSeconds() - startdate.getSeconds();
          newWork.push({
            ...eachExperience,
            diffYears: year,
            diffMonths: month,
            diffDays: days,
            diffHours: hours,
            diffMinutes: minutes,
            diffSeconds: seconds,
          });
        });
        setWorkExperience(newWork);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [workExperience]);
  const changeEducation = (value: EducationProps[]) => {
    setEducation(value);
  };
  const changeWorkExperience = (value: WorkExperiencesProps[]) => {
    setWorkExperience(value);
  };
  const changeAboutMeInfo = (value: AboutMeProps) => {
    setAboutMeInfo(value);
  };
  const changeDarkMode = (value: boolean) => {
    setDarkMode(value);
    if (value) {
      setColorsTheme({
        titles: "#fff",
        text: "#d6d1d1",
        background: "#000",
        backgroundHeaderFooter: "#1092ff",
      });
    } else {
      setColorsTheme({
        titles: "#1092ff",
        text: "#5b5b5b",
        background: "#fff",
        backgroundHeaderFooter: "#dfe9fb",
      });
    }
    Cookies.set("darkMode", value ? "true" : "false");
  };
  return (
    <InfoContext.Provider
      value={{
        changeEducation,
        education,
        changeWorkExperience,
        workExperience,
        aboutMeInfo,
        changeAboutMeInfo,
        changeDarkMode,
        darkMode,
        colorsTheme,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};

export const useInfo = () => useContext(InfoContext);
