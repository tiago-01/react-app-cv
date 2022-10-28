import { useInfo } from "../../context/infoContext";
import { FooterStyle } from "./style";

const Footer = () => {
  const { colorsTheme, changeDarkMode, darkMode } = useInfo();

  return (
    <FooterStyle
      theme={{
        titles: colorsTheme.titles,
        text: colorsTheme.text,
        background: colorsTheme.backgroundHeaderFooter,
      }}
    >
      <div className="content-wrapper">
        <a href={"/"} className="title">
          My CV
        </a>
        <div className="toogle-wrapper">
          <p
            onClick={() => changeDarkMode(false)}
            className={!darkMode ? "selected" : ""}
          >
            DAY
          </p>
          <p className="divider">|</p>
          <p
            onClick={() => changeDarkMode(true)}
            className={darkMode ? "selected" : ""}
          >
            NIGHT
          </p>
        </div>
      </div>
    </FooterStyle>
  );
};
export default Footer;
