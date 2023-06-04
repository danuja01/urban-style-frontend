import React, { useEffect } from "react";
import "./styles.css";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      const scrolled = window.scrollY > 0;
      navbar.classList.toggle("scrolled", scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <a href="/">Home</a>
      <a href="/about">About Us</a>
      <a href="/services">Our Services</a>
      <div>
        <a href="/services">
          <img src="assets/images/us-logo.svg" alt="logo" />
        </a>
      </div>
      <a href="/contact">Contact Us</a>
      <a href="/login">Login</a>
      <button>Book Now</button>
    </nav>
  );
};

export default Navbar;
