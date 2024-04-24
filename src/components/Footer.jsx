import React from 'react'

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto py-10 pb-16 flex items-center gap-32'>
        <div className='basis-1/2'>
            <h1 className='text-[12rem] font-medium leading-none tracking-tight'>refokus.</h1>
        </div>
        <div className='basis-1/2 flex gap-4'>
            <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                {["instagram","twitter (x?)","LinkedIn"].map((item,index)=><a key={index} className='block mt-2 text-zinc-500 capitalize'>{item}</a>)}
            </div>
            <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                {["home","work","careers","contact"].map((item,index)=><a key={index} className='block mt-2 text-zinc-300 capitalize'>{item}</a>)}
            </div>
            <div className='basis-1/2'>
                <p className='text-zinc-200 font-medium'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
