const Banner = () => {
  return (
    <section className='relative lg:h-1/2 flex flex-col lg:flex-row'>
      {/* Text Section */}
      <div className='flex flex-col justify-center items-center lg:items-start bg-black text-white p-8 lg:px-16 lg:w-1/2'>
        <div
          className='bg-cover bg-center w-52
           h-20 lg:w-34 lg:h-20 mb-4'
          style={{
            backgroundImage: `url('https://images.ctfassets.net/wn7ipiv9ue5v/787xl5GAX1DHerodehTlqj/f63a43907cac1f96ced85169d40ee737/RDR2_logo.png?w=1536&h=&fm=avif&q=75')`,
          }}
        ></div>
        <p className='text-gray-300'>Essentials Collection Now Available</p>
        <a
          href=''
          className='text-xl font-semibold border rounded px-6 py-2 mt-6'
        >
          Shop Now
        </a>{' '}
      </div>

      {/* Image Section */}
      <div
        className='bg-cover bg-center lg:w-1/2 h-[200px] lg:h-auto'
        style={{
          backgroundImage: `url('https://images.ctfassets.net/wn7ipiv9ue5v/AUyAKJaKI00AvkIlX8bDQ/9883a60f608390f27afb148ce86d0d0a/R_Store_RDRPackaging_1344x500.jpg?w=2048&h=&fm=avif&q=75')`,
        }}
      ></div>
    </section>
  );
};

export default Banner;
