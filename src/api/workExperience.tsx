export interface WorkExperiencesProps {
  role: string;
  company: string;
  markdownText: string;
  startDate: string;
  diffYears: number | string;
  diffMonths: number | string;
  diffDays: number | string;
  diffHours: number | string;
  diffMinutes: number | string;
  diffSeconds: number | string;
}
const workExperiences: WorkExperiencesProps[] = [];
// const markdown1 = `
//   **City:** Guimarães
//   **Country:** Portugal
//   **Main Activities and responsabilities:**
//   On this role I worked with the following techs:

//   **MySQL** to create databases.
//   **Laravel (PHP)** to develop frontend and backend.
//   `;
// const markdown2 = `
//   **City:** Guimarães
//   **Country:** Portugal
//   **Main Activities and responsabilities:**
//   On this role I worked with the following techs:

//   **ReactJS** to develop the projects frontend.
//   **NodeJS** to develop the projects backend.
//   **PostgreSQL** to create SQL Databases.
//   **Strapi (CMS)** to develop some projects backend.
//   **React Native** to develop mobile apps.
//   **Typesense** to create NO-SQL Databases.
//   **C# Xamarin** to update some mobile apps.
//   `;
// const markdown3 = `**City:** Guimarães
//   **Country:** Portugal
//   **Main Activities and responsabilities:**
//   On the current role I am working with the following techs:

//   **ReactJS** to develop the projects frontend.
//   **NodeJS** to develop the projects backend.
//   **PostgreSQL** to create SQL Databases.
//   **Strapi (CMS)** to develop some projects backend.
//   **React Native** to develop mobile apps.
//   **Typesense** to create NO-SQL Databases.
//   **C# Xamarin** to update some mobile apps.

//   Some projects worked/working:
//   [SW!G Marketplace](https://www.swig.pt) - Online marketplace with expertise in wines, beers and
//   spirits.
//   [Marimba - Intangible heritage music](https://marimba.art) - The project aims to enhance music production in
//   Angola, Guinea-Bissau, Mozambique and East Timor.
//   [Grupo Vapo - Q8](https://www.grupovapo.com/) - Fuels company website and mobile app (
//   [App Store](https://apps.apple.com/pt/app/q8-grupo-vapo/id1567412058?platform=iphone),
//   [Google Play](https://play.google.com/store/apps/details?id=com.grupovapo.q8&hl=pt_PT&gl=US),
//   [App Gallery](https://appgallery.huawei.com/app/C104336035) )
//   `;
workExperiences.push({
  role: "Full Stack Developer",
  company: "Primariu",
  markdownText: `**City:** Guimarães  
  **Country:** Portugal  
  **Main Activities and responsabilities:**  
  On the current role I am working with the following techs:
  
  **ReactJS** to develop the projects frontend.  
  **NodeJS** to develop the projects backend.  
  **PostgreSQL** to create SQL Databases.  
  **Strapi (CMS)** to develop some projects backend.  
  **React Native** to develop mobile apps.  
  **Typesense** to create NO-SQL Databases.  
  **C# Xamarin** to update some mobile apps.  
  
  Some projects worked/working:  
  [SW!G Marketplace](https://www.swig.pt) - Online marketplace with expertise in wines, beers and
  spirits.  
  [Marimba - Intangible heritage music](https://marimba.art) - The project aims to enhance music production in
  Angola, Guinea-Bissau, Mozambique and East Timor.  
  [Grupo Vapo - Q8](https://www.grupovapo.com/) - Fuels company website and mobile app (
  [App Store](https://apps.apple.com/pt/app/q8-grupo-vapo/id1567412058?platform=iphone), 
  [Google Play](https://play.google.com/store/apps/details?id=com.grupovapo.q8&hl=pt_PT&gl=US), 
  [App Gallery](https://appgallery.huawei.com/app/C104336035) )
  `,
  startDate: "2021-07-02T09:00:00",
  diffDays: "...",
  diffHours: "...",
  diffMinutes: "...",
  diffMonths: "...",
  diffSeconds: "...",
  diffYears: "...",
});
workExperiences.push({
  role: "Full Stack Developer (Internship)",
  company: "Primariu",
  markdownText: `
  **City:** Guimarães  
  **Country:** Portugal  
  **Main Activities and responsabilities:**  
  On this role I worked with the following techs:
  
  **ReactJS** to develop the projects frontend.  
  **NodeJS** to develop the projects backend.  
  **PostgreSQL** to create SQL Databases.  
  **Strapi (CMS)** to develop some projects backend.  
  **React Native** to develop mobile apps.  
  **Typesense** to create NO-SQL Databases.  
  **C# Xamarin** to update some mobile apps.  
  `,
  startDate: "2021-02-01T09:00:00",
  diffDays: "...",
  diffHours: "...",
  diffMinutes: "...",
  diffMonths: "...",
  diffSeconds: "...",
  diffYears: "...",
});
workExperiences.push({
  role: "Web Developer (Internship)",
  company: "Universidade do Minho",
  markdownText: `
  **City:** Guimarães  
  **Country:** Portugal  
  **Main Activities and responsabilities:**  
  On this role I worked with the following techs:
  
  **MySQL** to create databases.  
  **Laravel (PHP)** to develop frontend and backend.
  `,
  startDate: "2017-10-01T09:00:00",
  diffDays: "...",
  diffHours: "...",
  diffMinutes: "...",
  diffMonths: "...",
  diffSeconds: "...",
  diffYears: "...",
});
const getWorkExperience = () => {
  return workExperiences;
};
export default getWorkExperience;
