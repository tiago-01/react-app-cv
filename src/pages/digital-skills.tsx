import { ContentWrapper } from "../components/ContentWrapper/style";
import { useInfo } from "../context/infoContext";
import DigitalSkillsPage from "../components/DigitalSkillsPage";

const DigitalSkills = () => {
  const { colorsTheme } = useInfo();
  return (
      <ContentWrapper theme={{ background: colorsTheme.background }}>
        <DigitalSkillsPage />
      </ContentWrapper>
  );
};
export default DigitalSkills;
