import Link from "next/link";
import { useEffect, useRef } from "react";

export default function NavItem({ nav, navStyle = "" }) {
  const menuAnim = useRef();
  useEffect(() => {
    if (menuAnim.current) {
      menuAnimation();
    } else {
      setTimeout(() => {
        menuAnimation();
      }, 1000);
    }
  }, []);
  const menuAnimation = () => {
    let rootParent = menuAnim.current.children;
    for (let i = 0; i < rootParent.length; i++) {
      let firstParent = rootParent[i].children;
      let arr = firstParent[0].textContent.split("");
      let spanData = "";
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] == " ") {
          spanData += `<span style='width:6px;'>${arr[j]}</span>`;
        } else {
          spanData += `<span>${arr[j]}</span>`;
        }
      }
      let result = '<div class="menu-text">' + spanData + "</div>";
      firstParent[0].innerHTML = result;
    }
  };
  return (
    <>
      <div className="header__nav-2">
        <ul
          className={
            navStyle ? `main-menu-${navStyle} menu-anim` : `main-menu menu-anim`
          }
          ref={menuAnim}
        >
          {nav.map((el, i) => {
            if (el.type === "megamenu") {
              return (
                <li className="has-megamenu" key={i}>
                  <Link href={el.link}>{el.nav_name}</Link>
                  <ul className={el.full_width ? "mega-menu" : "mega-menu-2"}>
                    {el.sub_nav.map((subEl, index) => {
                      return (
                        <li key={index}>
                          <div className="menu-heading">{subEl.title}</div>
                          <ul>
                            {subEl.data.map((elData, elIndex) => {
                              return (
                                <li key={elIndex}>
                                  <Link href={elData.link}>{elData.name}</Link>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            } else if (el.type === "dropdown") {
              return (
                <li key={i}>
                  <Link href={el.link}>{el.nav_name}</Link>
                  <ul className="main-dropdown">
                    {el.sub_nav.map((subEl, index) => {
                      return (
                        <li key={index}>
                          <Link href={subEl.link}>{subEl.name}</Link>
                          {subEl.sub_dropdown_nav &&
                            subEl.sub_dropdown_nav.length && (
                              <ul className="sub-dropdown">
                                {subEl.sub_dropdown_nav.map(
                                  (subDrop, subIndex) => {
                                    return (
                                      <li key={subIndex}>
                                        <Link href={subDrop.link}>
                                          {subDrop.name}
                                        </Link>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            )}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            } else {
              return (
                <li key={i}>
                  <Link href={el.link}>{el.nav_name}</Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
}
