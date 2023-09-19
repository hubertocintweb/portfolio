import ReactJS from "../assets/reactjs.png";
import ReactNative from "../assets/reactnative.png";
import NodeJs from "../assets/nodejs.png";
import Apple from "../assets/ios.png";
import Android from "../assets/android.png";
import "../style/header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <p className="header__title">Hubert BONDUAEUX</p>
        <p className="header__subtitle">Front-End Developer</p>
      </div>
      <div className="skills">
        <img className="skillImg" src={ReactJS} alt="React Js" />
        <img className="skillImg" src={NodeJs} alt="Node JS" />
        <img className="skillImg" src={ReactNative} alt="React Native" />
        <img className="skillImg" src={Apple} alt="iOS Apps" />
        <img className="skillImg" src={Android} alt="Android App" />
      </div>
    </header>
  );
}

export default Header;
