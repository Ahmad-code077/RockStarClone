import { useState, useContext } from 'react';
import GamesContext from '../context/GamesContext';
import GameCard from '../component/GameCardAdmin';
import AddGameForm from '../component/AddGameForm'; // Import the AddGameForm component
import UpdateGameForm from '../component/UpdateGameForm'; // Import the UpdateGameForm component

const AdminGames = () => {
  const { games, addGame, updateGame, deleteGame } = useContext(GamesContext);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleOpenUpdateForm = (game) => {
    setSelectedGame(game);
    setIsUpdateFormOpen(true);
  };

  const handleCloseUpdateForm = () => {
    setIsUpdateFormOpen(false);
    setSelectedGame(null);
  };

  const handleUpdateGame = (updatedGame) => {
    // console.log('updated', updatedGame);
    updateGame(updatedGame); // Pass updated game data
  };

  const handleDeleteGame = (gameId) => {
    deleteGame(gameId);
  };

  return (
    <div>
      <h2 className='text-4xl font-extrabold text-center text-white my-6'>
        Featured Games
      </h2>
      {/* Add new game form */}
      <AddGameForm addGame={addGame} />{' '}
      {/* Pass addGame as a prop to AddGameForm */}
      {/* Display list of games in grid format */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-12'>
        {games?.length > 0 ? (
          games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              handleUpdateGame={() => handleOpenUpdateForm(game)}
              handleDeleteGame={handleDeleteGame}
            />
          ))
        ) : (
          <div className='text-white'>No games found</div>
        )}
      </div>
      {/* Conditionally render UpdateGameForm */}
      {isUpdateFormOpen && selectedGame && (
        <UpdateGameForm
          game={selectedGame}
          handleUpdateGame={handleUpdateGame}
          closeForm={handleCloseUpdateForm}
        />
      )}
    </div>
  );
};

export default AdminGames;
