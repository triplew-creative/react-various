// import { Link } from "react-router-dom";
import ResponsiveAppBar from "./AppBar.tsx";
// import TemporaryDrawer from "./Drawer.tsx";
function Header() {
  return (
    <>
    <ResponsiveAppBar />
  
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="username">Change Username</Link>
          </li>
          <li>
            <Link to="focus">Focus</Link>
          </li>
          <li>
            <Link to="points">Points</Link>
          </li>
          <li>
            <Link to="focus-basic">Focus Basic</Link>
          </li>
          <li>
            <Link to="groceries">Grocery App</Link>
          </li>
          <li>
            <Link to="gallery">Gallery</Link>
          </li>
          <li>
            <Link to="message">Message</Link>
          </li>
        </ul>
      </nav> */}
    </>
  );
}

export default Header;
