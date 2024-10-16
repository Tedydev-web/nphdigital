import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "@/plugins";

gsap.registerPlugin(ScrollSmoother);

const ScrollSmootherComponents = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        ScrollSmoother.create({
          smooth: 1,
          effects: device_width < 1025 ? false : true,
          smoothTouch: false,
          normalizeScroll: false,
          ignoreMobileResize: true,
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return <div></div>;
};

export default ScrollSmootherComponents;
