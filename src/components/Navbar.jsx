import {
  faInstagram,
  faLinkedin,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const menuItems = [
  "Home",
  "About",
  "Projects",
  "Blog",
  "Certificate",
  "Get In Touch",
];
const socialIcons = [faLinkedin, faInstagram, faThreads];

export const Navbar = () => {
  return (
    <div className='flex justify-center'>
      <nav className='w-5/6 md:bg-card bg-transparent font-body text-text-primary p-5 max-sm:p-5 shadow-lg rounded-b-lg flex justify-evenly items-center'>
        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-30 text-lg'>
          {menuItems.map((item) => (
            <li key={item}>
              <a href='#' className='hover:text-gray-500'>
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons (hanya di desktop) */}
        <div className='hidden md:flex space-x-10 text-2xl'>
          {socialIcons.map((icon, index) => (
            <a key={index} href='#' className='hover:text-gray-500'>
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <Menu as='div' className='relative md:hidden ml-auto'>
          <MenuButton className='pt-5 text-2xl focus:outline-none'>
            ☰
          </MenuButton>
          <MenuItems
            transition
            className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-card ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in'
          >
            <div className='py-1'>
              {menuItems.map((item) => (
                <MenuItem key={item}>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-text-primary data-focus:bg-accent data-focus:text-text-secondary data-focus:outline-hidden'
                  >
                    {item}
                  </a>
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Menu>
      </nav>
    </div>
  );
};
