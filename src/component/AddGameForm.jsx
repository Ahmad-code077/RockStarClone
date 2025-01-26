import PropTypes from 'prop-types';
import { useState } from 'react';

const AddGameForm = ({ addGame }) => {
  const [newGame, setNewGame] = useState({
    title: '',
    description: '',
    imageUrl: '',
    price: '',
    link: '',
  });

  const handleAddGame = () => {
    // Check if any field is empty
    if (
      !newGame.title ||
      !newGame.description ||
      !newGame.imageUrl ||
      !newGame.price ||
      !newGame.link
    ) {
      alert('Please fill in all fields');
      return;
    }

    const game = { ...newGame, id: Date.now().toString() }; // Ensure ID is a string
    addGame(game);
    setNewGame({
      title: '',
      description: '',
      imageUrl: '',
      price: '',
      link: '',
    }); // Reset all fields
  };

  return (
    <div className='mb-12'>
      <h3 className='text-2xl text-center text-white mb-4'>Add New Game</h3>
      <div className='space-y-4 max-w-lg mx-auto'>
        <input
          type='text'
          placeholder='Title'
          value={newGame.title}
          onChange={(e) => setNewGame({ ...newGame, title: e.target.value })}
          className='w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500'
        />
        <input
          type='text'
          placeholder='Description'
          value={newGame.description}
          onChange={(e) =>
            setNewGame({ ...newGame, description: e.target.value })
          }
          className='w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500'
        />
        <input
          type='text'
          placeholder='Image URL'
          value={newGame.imageUrl}
          onChange={(e) => setNewGame({ ...newGame, imageUrl: e.target.value })}
          className='w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500'
        />
        <input
          type='number'
          placeholder='Price'
          value={newGame.price}
          onChange={(e) => setNewGame({ ...newGame, price: e.target.value })}
          className='w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500'
        />
        <input
          type='url'
          placeholder='Game Link'
          value={newGame.link}
          onChange={(e) => setNewGame({ ...newGame, link: e.target.value })}
          className='w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500'
        />
        <button
          onClick={handleAddGame}
          className='w-full py-3 px-4 bg-yellow-500 text-white text-lg rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500'
        >
          Add Game
        </button>
      </div>
    </div>
  );
};

AddGameForm.propTypes = {
  addGame: PropTypes.func.isRequired,
};

export default AddGameForm;
