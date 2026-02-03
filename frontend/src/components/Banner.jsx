import React from 'react'


function Banner() {
  return (
   
      <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10  dark:bg-slate-900 dark:text-white'>
      <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
      <div className='space-y-12'>
        <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>

             <p className="text-sm md:text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              et totam. Tempora amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas animi!
            </p>
            
            <label className="input validator w-full">

  <input type="email" placeholder="mail@site.com" required />
</label>
<button className="btn btn-active btn-secondary mt-2">Secondary</button>
      </div>
        </div>
      <div className=' order-1 w-full md:w-1/2'>
     <img src="/banner.jpg" alt="Banner" />

      </div>
      </div>
    
      </>
   
  )
}

export default Banner
