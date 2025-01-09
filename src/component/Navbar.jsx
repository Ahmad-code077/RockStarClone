import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
  IoMenuSharp,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
export const linksData = [
  { id: 1, link: 'Home', to: '/' },
  { id: 2, link: 'Games', to: '/games' },
  { id: 3, link: 'About', to: '/about' },
  { id: 4, link: 'Dashbaord', to: '/admin' },
];

export const contact = [
  {
    id: 1,
    icon: <IoCallOutline />,
    label: 'Call Now',
    detail: '+92320123243',
  },
  {
    id: 2,
    icon: <IoMailOutline />,
    label: 'Send Email',
    detail: 'ahmadeveloper077@gmail.com',
  },
  {
    id: 3,
    icon: <IoLocationOutline />,
    label: 'Address',
    detail: 'Pakistan',
  },
];

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav className='bg-black h-20 border-b border-gray-900'>
      <div className='max-w-6xl  mx-auto flex items-center justify-between px-4 h-full'>
        {/* Logo */}
        <div className='text-white text-2xl font-bold'>
          <Link to='/'>RockstarHub</Link>
        </div>
        {/* Navigation Links */}
        <ul className='hidden lg:flex space-x-6'>
          {linksData.map((item) => (
            <li key={item.id}>
              <Link
                to={item.to}
                className='text-white text-lg hover:text-gray-400 transition-colors duration-200'
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <button onClick={openSidebar} className='lg:hidden text-white text-3xl'>
          <IoMenuSharp />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
