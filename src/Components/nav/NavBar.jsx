import React, { useState, useEffect } from "react";
import { navLinks } from "../../Constants/constants";
import { styles } from "../../styles.js";

const Navbar = () => {
  const [active, setActive] = useState("about");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          setActive(link.id);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex flex-col items-end justify-end py-5
        px-2 fixed top-[-65px] z-20 bg-primary m-12
      `}
    >
      <ul className="list-none p-6 blobm">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`text-[18px] font-medium cursor-pointer mb-3`}
            onClick={() => {
              setActive(link.id);
            }}
          >
            <a
              href={`#${link.id}`}
              className={`flicker ${active === link.id ? "active" : ""}`}
              style={{
                fontFamily: "Elianto-Regular",
                color: active === link.id ? "white" : "gray",
								textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"

              }}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;