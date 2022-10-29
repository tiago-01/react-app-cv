import { ContentWrapper } from "../components/ContentWrapper/style";
import { useInfo } from "../context/infoContext";
import EducationTrainingPage from "../components/EducationTrainingPage";

const EducationTraining = () => {
  const { colorsTheme } = useInfo();
  return (
    <ContentWrapper theme={{ background: colorsTheme.background }}>
      <EducationTrainingPage />
    </ContentWrapper>
  );
};
export default EducationTraining;
