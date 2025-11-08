import Foodlist from "../../components/Foodlist";
import Banner from "../Banner/SwiperBanner";
import SearchBar from "../SearchBar/SearchBar";

export const HomePage = () => {
  return (
    <>
      <Banner />
      <SearchBar />
      <Foodlist />
    </>
  );
};
