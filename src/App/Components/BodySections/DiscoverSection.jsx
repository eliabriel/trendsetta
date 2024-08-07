import djbg from '../../Assets/vibes/djbg.jpg'

function DiscoverSection() {
  return (
    <div className='relative'>
      <div className=' w-fit h-fit'>
      <div className='bg-baseyellow absolute w-full h-full opacity-15'></div>
      <div className=''>
        <img src={djbg} alt='trenddj' className='object-contain object-bottom' />
      </div>
      <div className='absolute xxs:top-7 xxs:left-8 xxs:text-l xxs:space-y-1 s:top-24 s:left-20 s:text-3xl s:space-y-3'>
        <p className='underline'>discover </p>
        <p className=' underline text-black'>setting </p>
        <p className='underline'>trends</p>
      </div>
      </div>
    </div>
  )
}

export default DiscoverSection;