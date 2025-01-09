import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Helper function to truncate text
const truncateText = (text, length) => {
  if (text.length > length) {
    return text.slice(0, length) + '...';
  }
  return text;
};

const GameCard = ({ game }) => {
  return (
    <div
      key={game.id}
      className='relative bg-black text-white rounded-lg overflow-hidden transform hover:translate-y-[-10px] hover:shadow-2xl transition-all duration-300 cursor-pointer'
    >
      {/* Link to the single game page */}
      <Link to={`/games/${game.id}`} className='block'>
        <img
          src={game.imageUrl}
          alt={game.title}
          className='w-full h-48 object-cover'
        />
        <div className='p-6 flex flex-col gap-2'>
          <h3 className='text-2xl font-bold mb-2'>
            {truncateText(game.title, 20)}
          </h3>
          <p className='text-gray-300'>{truncateText(game.description, 50)}</p>
          <p className='text-xl font-bold'>Price : {game.price}$</p>
        </div>
      </Link>

      {/* Buy Now button */}
      <a
        href={game.link}
        target='_blank'
        rel='noopener noreferrer'
        className='block w-full py-3 px-4 bg-yellow-500 text-center text-lg font-semibold text-black rounded-lg hover:bg-yellow-600 transition-all duration-200 mt-4'
      >
        Buy Now
      </a>
    </div>
  );
};

// PropTypes for validation
GameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default GameCard;
