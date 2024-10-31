import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="div-header">
      <div className="row-1">
        <img src="/logoNaruto.jpg" id="logoNaruto" />
        <span>NARUTO API</span>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
