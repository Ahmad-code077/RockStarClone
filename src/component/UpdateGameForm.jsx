import { useState } from 'react';
import PropTypes from 'prop-types';

const UpdateGameForm = ({ game, handleUpdateGame, closeForm }) => {
  const [updatedGame, setUpdatedGame] = useState({
    id: game.id,
    title: game.title,
    description: game.description,
    imageUrl: game.imageUrl,
    price: game.price,
    link: game.link, // Add link to the state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedGame((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateGame(updatedGame); // Pass updated game to parent
    closeForm(); // Close the form after updating
  };

  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-gray-950 p-6 rounded-lg w-96 text-black'>
        <h2 className='text-2xl font-bold mb-4 text-white'>Update Game</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Title</label>
            <input
              type='text'
              name='title'
              value={updatedGame.title}
              onChange={handleChange}
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>
              Description
            </label>
            <input
              type='text'
              name='description'
              value={updatedGame.description}
              onChange={handleChange}
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>
              Image URL
            </label>
            <input
              type='text'
              name='imageUrl'
              value={updatedGame.imageUrl}
              onChange={handleChange}
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>Price</label>
            <input
              type='text'
              name='price'
              value={updatedGame.price}
              onChange={handleChange}
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-semibold mb-2'>
              Game Link
            </label>
            <input
              type='text'
              name='link'
              value={updatedGame.link}
              onChange={handleChange}
              className='w-full p-2 border rounded'
            />
          </div>
          <div className='flex justify-between'>
            <button
              type='button'
              onClick={closeForm}
              className='bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

UpdateGameForm.propTypes = {
  game: PropTypes.object.isRequired,
  handleUpdateGame: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
};

export default UpdateGameForm;
