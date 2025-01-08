import PropTypes from 'prop-types';

const GameCard = ({ game, handleUpdateGame, handleDeleteGame }) => {
  return (
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
        <h3 className='text-xl font-bold mb-2'>{game.title}</h3>
        <p className='text-gray-300 '>{game.description}</p>
        <p className=' mt-1'>
          Price <span className='text-red-600'>{game.price}$</span>
        </p>
        <div className='mt-4'>
          <button
            onClick={() => handleUpdateGame(game.id)}
            className='bg-blue-500 px-4 py-2 text-white rounded-lg mr-2 hover:bg-blue-600'
          >
            Update
          </button>
          <button
            onClick={() => handleDeleteGame(game.id)}
            className='bg-red-500 px-4 py-2 text-white rounded-lg hover:bg-red-600'
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
GameCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired, // Assuming price is a string
  }).isRequired,
  handleUpdateGame: PropTypes.func.isRequired,
  handleDeleteGame: PropTypes.func.isRequired,
};

export default GameCard;
