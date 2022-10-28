import Footer from "../components/Footer";
import Header from "../components/Header";
import { ContentWrapper } from "../components/ContentWrapper/style";
import HomePage from "../components/HomePage";
import { useInfo } from "../context/infoContext";

const Home = () => {
  const { colorsTheme } = useInfo();
  return (
    <div>
      <Header />
      <ContentWrapper theme={{ background: colorsTheme.background }}>
        <HomePage />
      </ContentWrapper>
      <Footer />
    </div>
  );
};
export default Home;
