import { ContentWrapper } from "../components/ContentWrapper/style";
import { useInfo } from "../context/infoContext";
import AboutMeContent from "../components/AboutMePage";

const AboutMePage = () => {
  const { colorsTheme } = useInfo();
  return (
    <ContentWrapper theme={{ background: colorsTheme.background }}>
      <AboutMeContent />
    </ContentWrapper>
  );
};
export default AboutMePage;
