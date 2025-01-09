import { useContext } from 'react';
import GameCard from '../component/GameCard';
import GamesContext from '../context/GamesContext';
const AllGames = () => {
  const { games } = useContext(GamesContext); // Get all games from context

  return (
    <div className='my-12 max-w-6xl  mx-auto px-4'>
      {/* Title */}
      <div className='text-center mb-6'>
        <h2 className='text-3xl text-white font-bold'>All Games</h2>
        <p className='text-lg text-gray-400 mt-2'>
          Explore our full collection of amazing games!
        </p>
      </div>

      {/* Game Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default AllGames;
