const Hero = () => {
  return (
    <section className='relative lg:h-screen flex flex-col lg:flex-row'>
      {/* Text Section */}
      <div className='flex flex-col justify-center items-center lg:items-start bg-black text-white p-8 lg:px-16 lg:w-1/2'>
        <div
          className='bg-cover bg-center w-72 h-40 lg:w-96 lg:h-52 mb-4'
          style={{
            backgroundImage: `url('https://images.ctfassets.net/wn7ipiv9ue5v/7bGOD1mXbCis8iPT7cFXwC/a5fe01260f6900724f07385fb1a2aad1/RDR_Logo_1000x1000.svg?w=512&h=&fm=avif&q=75')`,
          }}
        ></div>
        <p className='mt-4 text-3xl md:text-5xl lg:text-6xl font-extrabold'>
          RockstarHub
        </p>
      </div>

      {/* Image Section */}
      <div
        className='bg-cover bg-center lg:w-1/2 h-96 lg:h-auto'
        style={{
          backgroundImage: `url('https://images.ctfassets.net/wn7ipiv9ue5v/6Vui1TVTAsdMEWS0l7L0Rb/962e667b5d8cf0e256e01ee1268c31da/RDR_StorePage_FOBBackground_2160x2160_Deliv.jpg?w=2048&h=&fm=avif&q=75')`,
        }}
      ></div>
    </section>
  );
};

export default Hero;
