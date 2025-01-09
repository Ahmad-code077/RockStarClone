import { IoClose } from 'react-icons/io5';

import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import { contact, linksData } from './Navbar';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } fixed top-0 left-0 w-max h-full bg-black text-white transition-transform duration-300 z-50`}
    >
      <div className='flex items-center justify-between p-4 border-b border-gray-700'>
        <h2 className='text-xl font-bold'>Menu</h2>
        <button onClick={closeSidebar}>
          <IoClose className='text-2xl' />
        </button>
      </div>
      <nav className='mt-4'>
        <ul className='space-y-4'>
          {linksData.map(({ id, link, to }) => (
            <li key={id}>
              <Link
                to={to}
                className='block px-4 py-2 text-lg hover:bg-gray-800 rounded transition-colors duration-200'
                onClick={closeSidebar}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='mt-8 px-4'>
        {contact.map(({ id, icon, label, detail }) => (
          <div key={id} className='flex items-center mb-4'>
            <div className='text-2xl text-gray-400'>{icon}</div>
            <div className='ml-4'>
              <p className='text-sm text-gray-500 uppercase'>{label}</p>
              <p className='text-base'>{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
