export const Jumbotron = () => (
  <section className='flex flex-col md:flex-row items-center justify-between w-4/6 mx-auto my-30'>
    <div className='md:w-4/7 text-text-primary text-center md:text-left space-y-4'>
      <h1 className='text-6xl font-extrabold font-display'>
        Agriby D. Chaniago
      </h1>
      <p className='text-lg font-body text-text-secondary my-7'>
        A Computer Science student at the Faculty of Science and Technology,
        Harapan Bangsa University, with a deep interest in React Development and
        Blockchain.
      </p>
      <a
        href='#contact'
        className='inline-block bg-button text-text-primary font-body text-lg font-semibold px-25 py-7 rounded-md transition-all duration-300 shadow-lg hover:shadow-button-glow hover:bg-hover'
      >
        Let&apos;s get started &gt;
      </a>
    </div>

    <div className='md:w-3/7 mt-6 md:mt-0 flex justify-center'>
      <img
        src='/jumbotron.png'
        alt='Profile'
        className='w-40 h-40 md:w-120 md:h-120 rounded-full object-cover shadow-lg'
      />
    </div>
  </section>
);
