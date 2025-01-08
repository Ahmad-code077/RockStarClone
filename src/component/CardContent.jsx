const cardData = [
  {
    id: 1,
    title: 'Rockstar Game 1',
    description:
      'Explore the wild world of Rockstar game with thrilling missions and adventures.',
    imageUrl:
      'https://images.ctfassets.net/wn7ipiv9ue5v/j7xG625hKDU1Y9nH6LNxV/a2c01d7b7d44e93762a7a83d993cb35a/RSG_Store_RDR_PlayingCards_01_2160x2160_Deliv.jpg?w=650&h=&fm=avif&q=75',
  },
  {
    id: 2,
    title: 'Rockstar Game 2',
    description:
      'Join the legendary game and become part of the action with every mission.',
    imageUrl:
      'https://images.ctfassets.net/wn7ipiv9ue5v/2iMLBsaVULMRXcF35UqI67/6919951d059dd76a5dd1363154c5706e/RSG_Store_RDR_LiarsDice_01_2160x2160_Deliv.jpg?w=650&h=&fm=avif&q=75',
  },
  {
    id: 3,
    title: 'Rockstar Game 3',
    description:
      'Experience the ultimate adventure and take on the world in Rockstar game.',
    imageUrl:
      'https://images.ctfassets.net/wn7ipiv9ue5v/7prb7hzstoojtRDtUecQ3S/bf14beb7dd4a487a901ef56f4accf93b/RockstarStore_PatchSet1_01_2160x2160_Deliv.jpg?w=650&h=&fm=avif&q=75',
  },
  {
    id: 4,
    title: 'Rockstar Game 3',
    description:
      'Experience the ultimate adventure and take on the world in Rockstar game.',
    imageUrl:
      'https://images.ctfassets.net/wn7ipiv9ue5v/7prb7hzstoojtRDtUecQ3S/bf14beb7dd4a487a901ef56f4accf93b/RockstarStore_PatchSet1_01_2160x2160_Deliv.jpg?w=650&h=&fm=avif&q=75',
  },
];

const CardContent = () => {
  return (
    <section className='py-8'>
      {/* Section Title */}
      <h2 className='text-4xl font-extrabold text-center text-white mb-6'>
        Discover Our Latest Rockstar Games
      </h2>
      <p className='text-lg text-center text-gray-300 mb-12'>
        Dive into the immersive worlds of our newest releases and experience
        unparalleled adventures.
      </p>

      {/* Card Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {cardData.map((card) => (
          <div
            key={card.id}
            className='relative bg-black text-white rounded-lg overflow-hidden transform hover:translate-y-[-10px] hover:shadow-2xl transition-all duration-300 cursor-pointer'
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-2xl font-bold mb-2'>{card.title}</h3>
              <p className='text-gray-300'>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardContent;
