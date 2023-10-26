import Footer from "../general/Footer";
import HeaderComponent from "../general/Header";
import OverViewSection from "./OverviewSection";
import GamesSnippet from "./gamesSnippet/GamesSnippet";

const HomePage: React.FC = () => {
  return (
    <>
      <HeaderComponent />
      <OverViewSection />
      <GamesSnippet />
      <Footer/>
    </>
  );
};

export default HomePage;
