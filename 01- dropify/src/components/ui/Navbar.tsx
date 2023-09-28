const Navbar = () => {
  return (
    <div className='anim-item w-[100%] h-[70px] absolute top-0 left-0'>
      <div className='w-[100%] h-[100%] max-w-[1280px] mx-auto flex justify-between items-center'>
        <div className='flex gap-3 items-center'>
          <div>
            <img src='/icon.svg' alt='icon' />
          </div>
          <h1 className='text-[28px] font-[Roboto] font-[700]'>Dropify</h1>
        </div>
        <div>
          <ul className='flex gap-3'>
            <li>
              <a href='/' className='font-[Roboto] font-[300] text-[18px]'>
                Home
              </a>
            </li>
            <li>
              <a href='/' className='font-[Roboto] font-[300] text-[18px]'>
                Products
              </a>
            </li>
            <li>
              <a href='/' className='font-[Roboto] font-[300] text-[18px]'>
                Prices
              </a>
            </li>
            <li>
              <a href='/' className='font-[Roboto] font-[300] text-[18px]'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className='flex gap-3 items-center'>
          <button className='py-[12px] px-[28px] font-[Roboto] font-[400] text-[18px]'>Try out</button>
          <button className='py-[12px] px-[28px] text-gray-700 font-[Roboto] font-[400] text-[18px] bg-gray-300 rounded-[30px]'>
            Order here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
