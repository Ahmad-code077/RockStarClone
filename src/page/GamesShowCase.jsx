import { useContext } from 'react';
import GamesContext from '../context/GamesContext';
import { Link } from 'react-router-dom';
import GameCard from '../component/GameCard';

const GamesShowCase = () => {
  const { games } = useContext(GamesContext); // Get games from context

  // Display only the first 4 games
  const displayedGames = games.slice(0, 4);

  return (
    <div className='mt-12'>
      {/* Text before cards */}
      <div className='text-center mb-8'>
        <h2 className='text-3xl text-white font-bold'>Featured Games</h2>
        <p className='text-lg text-gray-400 mt-2'>
          Check out our collection of the best games. Explore the most exciting
          titles below!
        </p>
      </div>

      {/* Game Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {displayedGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      <div className='text-center my-12 '>
        <Link
          to={'/games'}
          className=' px-6 py-2 bg-yellow-500  hover:bg-yellow-600 block mx-auto   text-center text-lg font-semibold text-black rounded-lg  transition-all duration-200 mt-4 w-full md:w-1/3'
        >
          Explore All Games
        </Link>
      </div>
    </div>
  );
};

export default GamesShowCase;
