import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import GamesContext from '../context/GamesContext';

const SeeSingleGameCard = () => {
  const { id } = useParams(); // Get the id from the URL
  const { games } = useContext(GamesContext); // Get games from context

  // Find the game based on the id
  const game = games.find((game) => game.id === id);

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className='max-w-7xl mx-auto p-6'>
      {/* Game Detail Section */}
      <div className='bg-black text-white rounded-lg shadow-xl overflow-hidden'>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2'>
            <img
              src={game.imageUrl}
              alt={game.title}
              className='w-full h-full object-cover rounded-t-lg md:rounded-l-lg'
            />
          </div>
          <div className='w-full md:w-1/2 p-8'>
            <h1 className='text-4xl font-bold mb-4'>{game.title}</h1>
            <p className='text-lg text-gray-300 mb-6'>{game.description}</p>
            <p className='text-2xl font-semibold mb-6'>Price: {game.price}$</p>
            <div className='flex items-center gap-4'>
              <a
                href={game.link}
                target='_blank'
                rel='noopener noreferrer'
                className='py-3 px-6 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 w-full text-center'
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeSingleGameCard;
