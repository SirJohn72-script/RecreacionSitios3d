import Navbar from "./Navbar";
import { Hero } from "./Hero";
import { Cards } from "./Cards";

export const Home = () => {
  return (
    <>
      <div className='container'>
        <Navbar />
        <div className='w-[100%] h-[100vh] absolute top-0 left-0 flex justify-center items-center '>
          <div className='w-[100%] max-w-[1300px] mx-auto flex flex-col gap-4'>
            <Hero />
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
};
