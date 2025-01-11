import { Link } from 'react-router-dom';
import { linksData } from './Navbar';
import firstIcon from '../assets/firsticon.svg';
import secondIcon from '../assets/secondicon.svg';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

// Social Media Links Data
const socialLinks = [
  { id: 1, icon: <FaFacebook />, href: 'https://facebook.com' },
  { id: 2, icon: <FaInstagram />, href: 'https://instagram.com' },
  { id: 3, icon: <FaTiktok />, href: 'https://tiktok.com' },
  { id: 4, icon: <FaTwitter />, href: 'https://twitter.com' },
  { id: 5, icon: <FaYoutube />, href: 'https://youtube.com' },
];

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8 '>
      <section className='max-w-6xl mx-auto px-4'>
        <div className=' flex flex-col md:flex-row md:justify-between '>
          {/* Quick Links Section */}
          <div className='space-y-4'>
            <h3 className='text-xl font-semibold mb-4 '>Quick Links</h3>
            <ul className='flex  space-x-6'>
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

          {/* Social Media Icons */}
          <div className='mt-4 md:mt-0'>
            <h3 className='text-xl font-semibold mb-4 text-left md:text-right'>
              Follow us
            </h3>
            <div className='flex md:justify-center items-center space-x-6 mt-6 md:mt-4'>
              {socialLinks.map(({ id, icon, href }) => (
                <a
                  key={id}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 text-2xl  duration-300 hover:scale-110 transition-all hover:text-yellow-500 '
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className='mt-6' />

        {/* Custom Icons Section */}
        <div className='flex flex-col md:flex-row justify-between mt-6'>
          <a
            href='https://example.com'
            target='_blank'
            rel='noopener noreferrer'
            className='w-20 h-20'
          >
            <img
              src={firstIcon}
              alt='First Icon'
              className='w-full h-full hover:opacity-80 transition-opacity duration-300'
            />
          </a>
          <a
            href='https://example.com'
            target='_blank'
            rel='noopener noreferrer'
            className='w-32 h-32 md:w-20 md:h-20 '
          >
            <img
              src={secondIcon}
              alt='Second Icon'
              className='w-full h-full hover:opacity-80 transition-opacity duration-300'
            />
          </a>
        </div>

        {/* Copyright */}
        <div className='mt-6 text-left md:text-center text-gray-400 text-sm'>
          † Conditions & restrictions apply. See{' '}
          <a
            href='https://www.ea.com/games/ea-sports-fc/fc-24/game-offer-and-disclaimers'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:no-underline'
          >
            EA Terms
          </a>{' '}
          for details. &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
