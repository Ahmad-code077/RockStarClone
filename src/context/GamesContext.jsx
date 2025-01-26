import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [games, setGames] = useState([]);

  // Fetch games from the server
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:5000/games');
        if (!response.ok) throw new Error('Failed to fetch games');
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };
    fetchGames();
  }, []);

  // Create a new game
  const addGame = async (newGame) => {
    try {
      const response = await fetch('http://localhost:5000/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGame),
      });
      if (!response.ok) throw new Error('Failed to add game');
      const addedGame = await response.json();

      // Convert the id to a string to prevent issues with large numbers
      addedGame.id = addedGame.id.toString();

      setGames((prevGames) => [...prevGames, addedGame]);
    } catch (error) {
      console.error('Error adding game:', error);
    }
  };

  // Update an existing game
  // In the updateGame function
  const updateGame = async (updatedGame) => {
    if (!updatedGame.id) {
      console.error('Game ID is missing');
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/games/${updatedGame.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedGame),
        }
      );
      if (!response.ok) throw new Error('Failed to update game');
      const data = await response.json();

      // Map over games and replace the game if the ID matches
      setGames((prevGames) =>
        prevGames.map((game) =>
          game.id === data.id ? { ...game, ...data } : game
        )
      );
    } catch (error) {
      console.error('Error updating game:', error);
    }
  };

  const deleteGame = async (gameId) => {
    if (!gameId) {
      console.error('Game ID is missing');
      return;
    }

    try {
      console.log(`Attempting to delete game with ID: ${gameId}`);

      // Convert gameId to a string to avoid precision issues with large numbers
      const response = await fetch(
        `http://localhost:5000/games/${gameId.toString()}`,
        {
          method: 'DELETE',
        }
      );

      const rawResponse = await response.text(); // Get raw response as text
      console.log('Raw response:', rawResponse); // Log raw response

      if (response.status === 404) {
        console.error(`Game with ID ${gameId} not found`);
        return;
      }

      if (!response.ok) {
        const errorData = JSON.parse(rawResponse); // Parse response text to JSON
        console.error('Error deleting game:', errorData);
        throw new Error(errorData.message || 'Failed to delete game');
      }

      setGames((prevGames) => prevGames.filter((game) => game.id !== gameId));
      console.log('Game deleted successfully');
    } catch (error) {
      console.error('Error deleting game:', error);
    }
  };

  return (
    <GamesContext.Provider value={{ games, addGame, updateGame, deleteGame }}>
      {children}
    </GamesContext.Provider>
  );
};

GamesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GamesContext;
