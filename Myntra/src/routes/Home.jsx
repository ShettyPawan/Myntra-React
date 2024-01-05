import { useSelector } from "react-redux";
import Banners from "../components/Banners";
import HomePageItems from "../components/HomePageItems";
import "../../css/myntra.css";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <>
      <Banners />
      <main className="mainContainer">
        {items.map((item) => (
          <HomePageItems key={item.id} item={item} />
        ))}
      </main>
    </>
  );
};

export default Home;
