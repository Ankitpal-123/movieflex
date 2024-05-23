import HeroBanner from "./heroBanner/HeroBanner";
import "./style.scss";

const Home = () => {
  return (
    <div>
      <div className="homePage">
        <HeroBanner />
      </div>
    </div>
  );
};

export default Home;
