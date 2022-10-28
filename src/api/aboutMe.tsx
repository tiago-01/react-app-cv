export interface AboutMeProps {
  photo: string;
  name: string;
  email: string;
  gender: string;
  birth: string;
  nationality: string;
  markdownText: string;
  digitalSkills: string[];
}

const aboutMeInfo: AboutMeProps = {
  photo: "/my_photo.jpeg",
  name: "Tiago Silva",
  email: "tiagovscsilva@gmail.com",
  gender: "Male",
  birth: "01/01/2001",
  nationality: "Portuguese",
  markdownText: `I am 21 years old, from Portugal  
I am a dedicated person who doesn't give up on his goals`,
  digitalSkills: [
    "React",
    "ReactNative",
    "Kotlin",
    "JavaScript",
    "TypeScript",
    "Laravel",
    "MySQL",
    "PostgreSQL",
    "CSS",
    "HTML",
    "C",
    "AdonisJS",
    "GIT",
    "NodeJS",
    "Docker",
  ],
};
const getAboutMeInfo = () => {
  return aboutMeInfo;
};
export default getAboutMeInfo;
