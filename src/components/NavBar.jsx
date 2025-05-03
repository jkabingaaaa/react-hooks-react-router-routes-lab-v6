// src/components/NavBar.jsx
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
      <nav role="navigation"> {/* Added role="navigation" */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </nav>
  
    </div>
  );
}

export default NavBar;