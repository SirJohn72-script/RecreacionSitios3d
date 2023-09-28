export const Cards = () => {
  return (
    <div className='w-[100%] grid grid-rows-1 grid-cols-3 gap-4'>
      <div className='anim-item glass-card p-6 flex flex-col gap-4 rounded-[30px]'>
        <div className='anim-item-2 flex gap-4 justify-between'>
          <img src='/card-1-icon.svg' alt='card-icon-1' className='h-[60px]' />
          <img src='/question.svg' alt='card-icon-1' />
        </div>
        <div className='pt-[50px] flex flex-col gap-4'>
          <h2 className='anim-item-2 font-[Roboto] font-[700] text-gray-700 text-[32px]'>Robot-driver</h2>
          <p className='anim-item-2 font-[Roboto] font-[300] text-gray-700 text-[16px] leading-[24px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam incidunt odit quis sed, saepe, veniam
            dolores id a magnam voluptates, deleniti obcaecati nemo quae ex et inventore provident ducimus omnis?
          </p>
        </div>
      </div>
      <div className='anim-item glass-card p-6 flex flex-col gap-4 rounded-[30px]'>
        <div className='pt-[50px] flex flex-col gap-4'>
          <h2 className='anim-item-2 font-[Roboto] font-[700] text-gray-700 text-[32px]'>Online Delivery Ordering</h2>
          <p className='anim-item-2 font-[Roboto] font-[300] text-gray-700 text-[16px] leading-[24px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam incidunt odit quis sed, saepe, veniam
            dolores id a magnam voluptates, deleniti obcaecati nemo quae ex et inventore provident ducimus omnis?
          </p>
        </div>
        <div className='anim-item-2 flex gap-4'>
          <img src='/question.svg' alt='card-icon-1' />
          <p className='font-[Roboto] font-[300] text-gray-700 text-[16px] leading-[24px]'>
            {" "}
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
      <div className='anim-item glass-card p-6 flex flex-col gap-4 rounded-[30px]'>
        <div className='anim-item-2 flex gap-4 justify-between'>
          <img src='/card-3-icon.png' alt='card-icon-1' className='h-[60px]' />
          <img src='/question.svg' alt='card-icon-1' />
        </div>
        <div className='pt-[50px] flex flex-col gap-4'>
          <h2 className='anim-item-2 font-[Roboto] font-[700] text-gray-700 text-[32px]'>Our support team</h2>
          <p className='anim-item-2 font-[Roboto] font-[300] text-gray-700 text-[16px] leading-[24px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam incidunt odit quis sed, saepe, veniam
            dolores id a magnam voluptates, deleniti obcaecati nemo quae ex et inventore provident ducimus omnis?
          </p>
        </div>
      </div>
    </div>
  );
};
