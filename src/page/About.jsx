import { FaUsers, FaGamepad, FaTrophy, FaRocket } from 'react-icons/fa';
import { IoMdHelpCircle } from 'react-icons/io';

const aboutData = [
  {
    id: 1,
    icon: <FaUsers />,
    title: 'Who We Are',
    description:
      'RockstarHub is a community of passionate gamers who come together to share, play, and enjoy the best of gaming.',
  },
  {
    id: 2,
    icon: <FaGamepad />,
    title: 'Our Games',
    description:
      'From thrilling action to relaxing puzzle games, RockstarHub features a diverse range of games for every player.',
  },
  {
    id: 3,
    icon: <FaTrophy />,
    title: 'Our Achievements',
    description:
      'With years of experience in the gaming industry, RockstarHub has earned numerous accolades for outstanding gaming content and community engagement.',
  },
  {
    id: 4,
    icon: <FaRocket />,
    title: 'Our Vision',
    description:
      'Our goal is to create the ultimate gaming destination, where players can connect, compete, and thrive together in an engaging and supportive environment.',
  },
];

const valuesData = [
  {
    id: 1,
    icon: <IoMdHelpCircle />,
    title: 'Fun',
    description:
      'Gaming is all about fun! We ensure every experience on RockstarHub is enjoyable and stress-free.',
  },
  {
    id: 2,
    icon: <FaUsers />,
    title: 'Community',
    description:
      'RockstarHub thrives on its strong, inclusive community where players can meet, collaborate, and build lasting friendships.',
  },
  {
    id: 3,
    icon: <FaTrophy />,
    title: 'Excellence',
    description:
      'We are dedicated to excellence in every game, feature, and service we provide to ensure our users have the best experience.',
  },
];

const About = () => {
  return (
    <div className='text-white py-16'>
      <div className='max-w-6xl mx-auto px-4'>
        {/* Heading */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold '>
            Welcome to <span className='text-yellow-500'>RockstarHub</span>
          </h1>
          <p className='mt-4 text-lg text-gray-300'>
            Your one-stop hub for all things gaming. Discover, connect, and
            thrive in the world of games with RockstarHub.
          </p>
        </div>

        {/* Features Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {aboutData.map(({ id, icon, title, description }) => (
            <div
              key={id}
              className='bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-yellow-500 transition-all duration-300 group '
            >
              <div className='text-4xl text-yellow-500 mb-4 group-hover:text-white'>
                {icon}
              </div>
              <h3 className='text-2xl font-semibold mb-2'>{title}</h3>
              <p className='text-gray-300 group-hover:text-white'>
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Our Values Section */}
        <div className='mt-16'>
          <h2 className='text-3xl font-semibold text-center  my-12'>
            Our Core <span className='text-yellow-500'>Values</span>
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {valuesData.map(({ id, icon, title, description }) => (
              <div
                key={id}
                className='flex flex-col items-center justify-center  border border-yellow-500 px-4 py-2 rounded-md'
              >
                <div className='text-5xl text-yellow-500 mb-4 '>{icon}</div>
                <h4 className='text-xl font-semibold text-gray-300 mb-2'>
                  {title}
                </h4>
                <p className='text-gray-400 text-center'>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
