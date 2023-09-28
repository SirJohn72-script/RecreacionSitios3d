export const Hero = () => {
  return (
    <div className='w-[100%]'>
      <div className='flex flex-col gap-4'>
        <div>
          <h1 className='anim-item font-[Roboto] font-[400] text-gray-700 text-[120px]'>Fast, reliable, and</h1>
          <h1 className='anim-item font-[Roboto] font-[400] text-gray-700 text-[120px]'>convenient delivery</h1>
        </div>
        <div>
          <p className='anim-item font-[Roboto] font-[300] text-gray-700 text-[32px]'>
            Enjoy your free time while we deliver everything you need
          </p>
        </div>
        <div className='flex gap-4'>
          <button className='anim-item py-[20px] px-[35px] text-gray-700 font-[Roboto] font-[400] text-[18px] bg-gray-300 rounded-[30px]'>
            Order here
          </button>
          <button className='anim-item py-[20px] px-[35px] text-gray-200 font-[Roboto] font-[400] text-[18px] bg-gray-700 rounded-[30px]'>
            Request a demo
          </button>
        </div>
      </div>
    </div>
  );
};
