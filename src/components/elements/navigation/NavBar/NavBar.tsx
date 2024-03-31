
import { NavItem } from '../NavItem';
import NAV_LINKS from './paths';

const NavBar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
      {/* Add your Logo component here */}
      <ul className="hidden md:flex gap-x-6 text-white">
        {NAV_LINKS.map((link) => (
          <NavItem key={`link-${link.label}`} {...link} />
        ))}
      </ul>
      {/* Add your Button component here */}
    </div>
  );
};

export default NavBar;
