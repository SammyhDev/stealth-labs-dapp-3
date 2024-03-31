import { HStack } from '@chakra-ui/react';
import { NavItem } from '../NavItem';
import NAV_LINKS from './paths';

const NavBar = () => {
  return (
    <HStack gap={'15px'}>
       <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
      {NAV_LINKS.map((link) => (
        <NavItem key={`link-${link.label}`} {...link} />
      ))}
    </HStack>
  );
};

export default NavBar;
