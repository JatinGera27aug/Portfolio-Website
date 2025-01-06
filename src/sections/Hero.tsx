import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import Image from 'next/image';

export const HeroSection = () => {
  return <div className='py-32 md:py-48 lg:py-60 relative z-0 overflox-x-clip'>
    <div className='absolute inset-0 -z-30 opacity-5' style={{
      backgroundImage: `url(${grainImage.src})`,
    }}></div>
    <div className='size-[600px] hero_ring'></div>
    <div className='size-[800px] hero_ring'></div>
    <div className='size-[1000px] hero_ring'></div>
    <div className='size-[1200px] hero_ring'></div>
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
    <div className='border border-red-500 size-[760px] animate-spin [animation-duration:30s]'>
      <div className='border border-red-500 inline-flex animate-spin [animation-duration:5s]'>
      <StarIcon className="size-28 text-emerald-300" />
      {/* text-pink-500 hover:text-emerald-300 transition duration-300 */}
      </div>
      </div>
    </div>
    <div className="container">
      <div className='flex flex-col items-center '>
      <Image src={memojiImage}  className='size-[100px]' alt="Person peeking from behind of laptop" />
      <div className='bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg'>
        <div className='bg-green-500 size-2.5 rounded-full'></div>
        <div className='text-sm font-medium'>Available for new Projects
        </div>
        </div>
      </div>
      <div className='max-w-lg mx-auto'>
      <h1 className='font-serif text-3xl md:text-5xl text-center mt-7 tracking-wide'>Building Exceptional User Experiences</h1>
      <p className='mt-3 text-center text-white/60 md:text-lg'>Expertise in Backend Development and Cloud Computing</p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center mt-7 gap-4'>
        <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
          <span className='font-semibold'>Explore My Work</span>
          <ArrowDown className="size-4"/>
        </button>

        <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
          <span>👋</span>
          <span className='font-semibold'>Lets Connect</span>
        </button>
      </div>
    </div>
  </div>;
};