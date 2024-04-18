import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About",
    url: "/about",
  },
  {
    display: "Courses",
    url: "/courses",
  },
  {
    display: "Payments",
    url: "/payments",
  },
  {
    display: "Careers",
    url: "/careers",
  },
  {
    display: "Blog",
    url: "/blog",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 0) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+233543119117";
  };

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                <i className="ri-pantone-line"></i> Early Rain Tech.
              </Link>
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <Link to={item.url}>{item.display}</Link>
                  </li>
                ))}
                {window.innerWidth <= 768 && (
                  <li className="nav__item" onClick={handleCall}>
                    <i className="ri-phone-line"></i> +233543119117
                  </li>
                )}
              </ul>
            </div>

            <div className="nav__right">
              <i className="ri-phone-line"></i> +233 543 119 117
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;