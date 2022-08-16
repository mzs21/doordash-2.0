import IntroText from "./IntroText";
import NavBar from "./NavBar";
import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <header className="header-container">
      <NavBar />
      <IntroText />
      <SearchBox />
    </header>
  );
};

export default Header;
