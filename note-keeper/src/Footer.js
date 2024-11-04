import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer>Copyright © {currentYear} PESto</footer>;
}

export default Footer;
