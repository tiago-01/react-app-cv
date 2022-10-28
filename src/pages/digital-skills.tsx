import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContentWrapper } from "../components/ContentWrapper/style";
import { useInfo } from "../context/infoContext";
import DigitalSkillsPage from "../components/DigitalSkillsPage";

const DigitalSkills = () => {
  const { colorsTheme } = useInfo();
  return (
    <div>
      <Header />
      <ContentWrapper theme={{ background: colorsTheme.background }}>
        <DigitalSkillsPage />
      </ContentWrapper>
      <Footer />
    </div>
  );
};
export default DigitalSkills;
