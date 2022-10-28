import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContentWrapper } from "../components/ContentWrapper/style";
import { useInfo } from "../context/infoContext";
import EducationTrainingPage from "../components/EducationTrainingPage";

const EducationTraining = () => {
  const { colorsTheme } = useInfo();
  return (
    <div>
      <Header />
      <ContentWrapper theme={{ background: colorsTheme.background }}>
        <EducationTrainingPage />
      </ContentWrapper>
      <Footer />
    </div>
  );
};
export default EducationTraining;
