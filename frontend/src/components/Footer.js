

import React, { useState, useEffect } from "react";
import "../styles/Layout.css";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => setShowScroll(window.pageYOffset > 400);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="copyright">
          &copy; {new Date().getFullYear()} MyNotebook. All rights reserved.
        </p>
      </div>

     
    </footer>
  );
};

export default Footer;
