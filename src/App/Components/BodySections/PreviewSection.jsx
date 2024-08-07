import settaback from '../../Assets/previewimg/setta-back.png'

function PreviewSection() {
  return (
    <div className='bg-basegray relative w-full '>
      <div>
        <span className=' absolute xxs:top-1/3 xxs:left-3 inline-block xxs:text-[9px] '>its not what you wear <span className='text-black underline'>but</span> how you wear it</span>
        <span className=' absolute xxs:bottom-1/4 xxs:left-10 inline-block xxs:text-2xl '>its all in <span className='text-white underline'>you</span></span>
      </div>
      <div className='flex items-end justify-center'>
          <img src={ settaback } alt='setta' className='xxs:w-3/5 h-fit' />
      </div>
    </div>
  )
}

export default PreviewSection;