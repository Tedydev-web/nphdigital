import { useEffect, useRef, useState } from "react";
import Canvas from "../canvas/Canvas";
import DesignStudioLogo from "../logo/DesignStudioLogo";
import MenuWhite from "../../../public/assets/imgs/icon/menu-white.png";
import Image from "next/image";
import NavItem from "../nav/NavItem";

export default function Header2({ navData }) {
  const [topScroll, setTopScroll] = useState(0);

  const ofCanvasArea = useRef();
  const headerArea = useRef();

  const handleTopScroll = () => {
    const position = window.pageYOffset;
    setTopScroll(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleTopScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleTopScroll);
    };
  }, []);
  if (typeof window !== "undefined") {
    let header_bg_2 = headerArea.current;
    if (header_bg_2) {
      if (topScroll > 20) {
        header_bg_2.style.background = "#121212";
        header_bg_2.classList.add("sticky-2");
      } else {
        header_bg_2.style.background = "transparent";
        header_bg_2.classList.remove("sticky-2");
      }
    }
  }

  const openCanvas = () => {
    ofCanvasArea.current.style.opacity = "1";
    ofCanvasArea.current.style.visibility = "visible";
  };
  return (
    <>
      {navData && Object.keys(navData).length && (
        <>
          <header className="header__area-2" ref={headerArea}>
            <div className="header__inner-2">
              <DesignStudioLogo />
              {navData.nav && navData.nav.length && (
                <NavItem nav={navData.nav} />
              )}
              <div className="header__nav-icon-2">
                <button onClick={openCanvas}>
                  <Image
                    priority
                    width={22}
                    height={22}
                    src={MenuWhite}
                    alt="Menubar Icon"
                  />
                </button>
              </div>
            </div>
          </header>
        </>
      )}
      <Canvas ofCanvasArea={ofCanvasArea} />
    </>
  );
}
