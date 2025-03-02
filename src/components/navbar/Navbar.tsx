import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { styles } from "../../styles";
import { navLinks } from "../../constants";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={"./logo.svg"}
            alt="logo"
            className="w-9 h-9 object-contain"
          />
          <h3 className="text-white text-[18px] font-bold cursor-pointer flex ">
            Mirsaid&nbsp; | &nbsp;Mirakhmedov
          </h3>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <Link
                to={nav.id}
                spy={true}
                smooth={true}
                activeClass="text-white"
                className="text-secondary"
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <Link
                    to={nav.id}
                    spy={true}
                    smooth={true}
                    activeClass="text-white"
                    className=" text-secondary"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
