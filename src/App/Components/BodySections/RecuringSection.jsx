import HorizontalBar from "../MotionBars/HorizontalBar";

function RecuringSection() {
  const textArray = new Array(100).fill('TRENDSETTA');
  
  return (
    <div className="">
      <HorizontalBar />
      <div>
        <div className="grid gap-1 bg-black text-center text-red-500 p-2 xxs:grid-cols-3 md:grid-cols-4 lg:grid-cols-auto-fit">
              {textArray.map((text, index) => (
                <div key={index} className="font-bold text-xs xxs:text-lg m:text-xl l:text-2xl">
                  {text}
                </div>
              ))}
            </div>
      </div>
    </div>
  )
}

export default RecuringSection;