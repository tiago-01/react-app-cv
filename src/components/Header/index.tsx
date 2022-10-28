import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useInfo } from "../../context/infoContext";
import { HeaderStyle } from "./style";

const Header = () => {
  const { colorsTheme, darkMode, changeDarkMode } = useInfo();
  const sidebarLeftRef: any = useRef();
  const [openMenuLeft, setOpenMenuLeft] = useState(false);
  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (
        sidebarLeftRef.current &&
        !sidebarLeftRef.current.contains(event.target)
      ) {
        setOpenMenuLeft(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarLeftRef]);
  return (
    <HeaderStyle
      theme={{
        titles: colorsTheme.titles,
        text: colorsTheme.text,
        background: colorsTheme.backgroundHeaderFooter,
      }}
    >
      <div className="content-wrapper">
        <div
          onClick={() => setOpenMenuLeft(!openMenuLeft)}
          className="menu-icon-wrapper"
        >
          <AiOutlineMenu fontSize={28} />
        </div>
        <a href={"/"} className="title">
          My CV
        </a>
        <div className="links-wrapper">
          <a href={"about-me"} className="header-link">
            About Me
          </a>
          <a href={"digital-skills"} className="header-link">
            Digital Skills
          </a>
          <a href={"work-experience"} className="header-link">
            Work Experience
          </a>
          <a href={"education-training"} className="header-link">
            Education and Training
          </a>
        </div>
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
      <div className={openMenuLeft ? "menu-mobile active" : "menu-mobile"}>
        <div
          ref={sidebarLeftRef}
          className={
            openMenuLeft
              ? "menu-mobile-items-left active"
              : "menu-mobile-items-left"
          }
        >
          <div className="menu-open-header-wrapper">
            <div
              className="close-button-menu"
              onClick={() => setOpenMenuLeft(!openMenuLeft)}
            >
              <AiOutlineClose fontSize={25} />
            </div>
            <div className="links-wrapper">
              <a href={"about-me"} className="header-link">
                About Me
              </a>
              <a href={"digital-skills"} className="header-link">
                Digital Skills
              </a>
              <a href={"work-experience"} className="header-link">
                Work Experience
              </a>
              <a href={"education-training"} className="header-link">
                Education and Training
              </a>
            </div>
          </div>
        </div>{" "}
      </div>
    </HeaderStyle>
  );
};
export default Header;
