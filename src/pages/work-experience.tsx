import { ContentWrapper } from "../components/ContentWrapper/style";
import { useInfo } from "../context/infoContext";
import WorkExperiencePage from "../components/WorkExperiencePage";

const WorkExperience = () => {
  const { colorsTheme } = useInfo();
  return (
    <ContentWrapper theme={{ background: colorsTheme.background }}>
      <WorkExperiencePage />
    </ContentWrapper>

  );
};
export default WorkExperience;
