import { IoMenuSharp } from 'react-icons/io5';
import { links } from './Sidebar';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';

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
          {links.map((item) => (
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
