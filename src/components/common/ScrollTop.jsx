import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const ScrollTop = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let scroll_top = document.getElementById("scroll_top");
      if (scroll_top) {
        window.onscroll = function () {
          if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
          ) {
            scroll_top.style.display = "block";
          } else {
            scroll_top.style.display = "none";
          }
        };

        scroll_top.addEventListener("click", function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        });
      }
    }
  }, []);
  return (
    <>
      <button id="scroll_top" className="scroll-top">
        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
      </button>
    </>
  );
};

export default ScrollTop;
