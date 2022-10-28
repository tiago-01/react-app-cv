
export interface EducationProps {
  title: string;
  place: string;
  websiteUrl?: string;
  address?: string;
  startDate?: string;
  endDate?: string;
}
const educationAndTraining: EducationProps[] = [];
educationAndTraining.push({
  title: "React, React Native and NodeJS Online Courses",
  websiteUrl: "https://www.rocketseat.com.br/",
  place: "Rocketseat",
});
educationAndTraining.push({
  title: "React, React Native and NodeJS Online Courses",
  websiteUrl: "https://www.pluralsight.com/",
  place: "Pluralsight",
});
educationAndTraining.push({
  title: "HTML, CSS and JavaScript Online Courses",
  websiteUrl: "https://www.pluralsight.com/",
  place: "Pluralsight",
});
educationAndTraining.push({
  title: "Higher Technical Course in Mobile Applications",
  address: "Instituto Politécnico do Cávado e do Ave",
  place: "Guimarães, Portugal",
});
educationAndTraining.push({
  title: "Professional Course in Programming and Management Computer Systems",
  address: "Escola Secundária Martins Sarmento",
  place: "Guimarães, Portugal",
});
const getEducationAndTraining = () => {
  return educationAndTraining;
};
export default getEducationAndTraining;
