import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-20 flex gap-1'>
            <Card width={"basis-1/3"} start={false} para={true} bg={"bg-zinc-800"} />
            <Card width={"basis-2/3"} start={true} para={false} bg={"bg-[#323238]"} hover={"bg-[#7443FF]"}/>
        </div>
    </div>
  )
}

export default Cards
