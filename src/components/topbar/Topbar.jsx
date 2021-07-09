import "./Topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            welcome.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>603 702 8369</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a className="email" href="mailto:brianna.giorgi@gmail.com" target="_blank"><span>brianna.giorgi@gmail.com</span></a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}