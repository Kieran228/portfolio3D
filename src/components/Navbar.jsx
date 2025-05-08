import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="inner">
        <a className="logo" href="#logo">
          Kieran Caraway | Jr Dev
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ name, link }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact Me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
