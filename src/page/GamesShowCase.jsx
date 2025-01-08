import { useState, useContext } from 'react';
import GamesContext from '../context/GamesContext';

const GamesShowCase = () => {
  const { games } = useContext(GamesContext); // Get games from context
  const [showAll, setShowAll] = useState(false); // Track if all games are displayed

  // Determine how many cards to display based on showAll state
  const displayedGames = showAll ? games : games.slice(0, 4);

  return (
    <div className='mt-12'>
      {/* Text before cards */}
      <div className='text-center mb-6'>
        <h2 className='text-3xl text-white font-bold'>Featured Games</h2>
        <p className='text-lg text-gray-400 mt-2'>
          Check out our collection of the best games. Explore the most exciting
          titles below!
        </p>
      </div>

      {/* Game Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {displayedGames.map((game) => (
          <div
            key={game.id}
            className='relative bg-black text-white rounded-lg overflow-hidden transform hover:translate-y-[-10px] hover:shadow-2xl transition-all duration-300 cursor-pointer'
          >
            <img
              src={game.imageUrl}
              alt={game.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-2xl font-bold mb-2'>{game.title}</h3>
              <p className='text-gray-300'>{game.description}</p>
              <p>{game.price}$</p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {!showAll && games.length > 4 && (
        <div className='text-center mt-4'>
          <button
            onClick={() => setShowAll(true)}
            className='px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600'
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default GamesShowCase;
