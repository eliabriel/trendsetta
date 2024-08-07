import joe from '../../Assets/collabimg/joe.png';
import { GiCrossMark } from "react-icons/gi";

function CollabSection() {
  
  return (
    <div className="relative">
      <div className="w-full h-fit bg-basegray">
        <div className="text-xs">
          <img src={joe} alt="trendcollab" />
        </div>
        <div className='w-full h-fit absolute inset-0 flex justify-end'>
          <div className='flex flex-col items-end'>
            <p className='xxs:text-3xl xs:text-5xl s:text-7xl mt-3'>collabs</p>
            <p>trendsetta</p>
            <GiCrossMark size={28} className='text-black mr-16' />
            <div className='font-smooch text-3xl text-black flex items-center space-x-2 mr-6'>
              <p className='italic'>|</p>
              <p className='text-2xl'>uzi</p>
              <p className='italic'>|</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollabSection;
