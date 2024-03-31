
import { NavItem } from '../NavItem';
import NAV_LINKS from './paths';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed top-0">
      {/* Add your Logo component here */}
      <ul className="md:flex gap-x-6 text-white hidden"> {/* Hide on small screens */}
        {NAV_LINKS.map((link) => (
          <NavItem key={`link-${link.label}`} {...link} />
        ))}
      </ul>
      {/* Add your Button component here */}
    </nav>
  );
};

export default NavBar;
