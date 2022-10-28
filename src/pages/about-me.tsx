import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContentWrapper } from "../components/ContentWrapper/style";
import { useInfo } from "../context/infoContext";
import AboutMeContent from "../components/AboutMePage";

const AboutMePage = () => {
  const { colorsTheme } = useInfo();
  return (
    <div>
      <Header />
      <ContentWrapper theme={{ background: colorsTheme.background }}>
        <AboutMeContent />
      </ContentWrapper>
      <Footer />
    </div>
  );
};
export default AboutMePage;
