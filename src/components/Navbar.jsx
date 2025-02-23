import {
  faInstagram,
  faLinkedin,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menuItems = [
  "Home",
  "About",
  "Projects",
  "Blog",
  "Certificate",
  "Get In Touch",
];
const socialIcons = [faLinkedin, faInstagram, faThreads];

export const Navbar = () => (
  <div className='flex justify-center'>
    <nav className='bg-card font-body text-text-primary p-7 shadow-lg w-5/6 rounded-b-lg flex justify-evenly items-center'>
      <ul className='hidden md:flex space-x-30 text-lg'>
        {menuItems.map((item) => (
          <li key={item}>
            <a href='#' className='hover:text-gray-500'>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className='flex space-x-10 text-2xl'>
        {socialIcons.map((icon, index) => (
          <a key={index} href='#' className='hover:text-gray-500'>
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </div>
      <button className='md:hidden p-2 focus:outline-none'>☰</button>
    </nav>
  </div>
);
