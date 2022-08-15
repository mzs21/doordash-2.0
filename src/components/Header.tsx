import IntroText from "./IntroText";
import NavBar from "./NavBar";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <div className="container">
      <NavBar />
      <IntroText />
      <SearchBox />
    </div>
  );
};

export default Header;
