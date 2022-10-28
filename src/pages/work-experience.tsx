import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContentWrapper } from "../components/ContentWrapper/style";
import { useInfo } from "../context/infoContext";
import WorkExperiencePage from "../components/WorkExperiencePage";

const WorkExperience = () => {
  const { colorsTheme } = useInfo();
  return (
    <div>
      <Header />
      <ContentWrapper theme={{ background: colorsTheme.background }}>
        <WorkExperiencePage />
      </ContentWrapper>
      <Footer />
    </div>
  );
};
export default WorkExperience;
