import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import ContactDialog from "../Dialog/ContactDialog.component";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const onContactClickHandler = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="navbar__container">
        <div className="navbar__logo">
          <h2 className="logo">
            Sai <span className="logo--span">Krishna</span>
          </h2>
        </div>
        <div className="navbar__links">
          <Link to="/">Portfolio</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link>Education</Link>
        </div>
        <button className="navbar__link--right nav--btn">
          <Link onClick={onContactClickHandler}>Contact</Link>
        </button>
      </div>
      <Outlet />
      <ContactDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default Navbar;
