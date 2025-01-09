import { Link } from 'react-router-dom';
import { linksData } from './Navbar';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
      <div className='max-w-6xl mx-auto px-4 flex flex-col'>
        {/* Quick Links Section */}
        <div className='space-y-4'>
          <h3 className='text-xl font-semibold mb-4 text-center'>
            Quick Links
          </h3>
          <ul className='flex justify-center space-x-6'>
            {linksData.map(({ id, link, to }) => (
              <li key={id}>
                <Link
                  to={to}
                  className='hover:text-yellow-500 transition-all duration-300'
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <div className='mt-6 text-center text-gray-400 text-sm'>
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
