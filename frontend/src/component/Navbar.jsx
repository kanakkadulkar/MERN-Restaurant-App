import React, { useState } from "react";
import jsonData from "../restApi.json"; // Use the default export if necessary.
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  // Access navbarLinks safely
  const navbarLinks = jsonData.data[0]?.navbarLinks || [];

  return (
    <>
      <nav>
        <div className="logo padding-3"><img src="/logo.png" alt="image.png" /></div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
                onClick={() => setShow(false)} // Optional: Close menu on link click
              >
                {element.title}
              </Link>
            ))}
          </div>
          <a href="/menu.pdf" download className="menuBtn download-btn">
  MENU
</a>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
