import { useEffect, useRef, useState } from "react";
import Canvas from "../canvas/Canvas";
import MenuDark from "../../../public/assets/imgs/icon/menu-dark.png";
import Image from "next/image";
import NavItem from "../nav/NavItem";
import LogoItem from "../logo/LogoItem";

export default function Header4({ navData }) {
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
    let header_bg_7 = headerArea.current;
    if (header_bg_7) {
      if (topScroll > 20) {
        header_bg_7.classList.add("sticky-7");
      } else {
        header_bg_7.classList.remove("sticky-7");
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
          <header className="header__area-7" ref={headerArea}>
            <div className="header__inner-2">
              <LogoItem />
              {navData.nav && navData.nav.length && (
                <NavItem nav={navData.nav} navStyle={4} />
              )}
              <div className="header__nav-icon-7">
                <button onClick={openCanvas} className="menu-icon-2">
                  <Image
                    priority
                    width={22}
                    height={22}
                    src={MenuDark}
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
