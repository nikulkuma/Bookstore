import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import {Link} from 'react-router-dom'
function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 justify-center items-center text-center'>
        <h1 className='text-2xl font-semibold md:4xl'>We're delighted to have <span className='text-pink-500'>you here :)</span> </h1>
        <p className='mt-10 font-semibold '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus iure tenetur consequuntur ab aliquid voluptas, sequi praesentium eveniet impedit repellat minus ut harum! Nisi, illo voluptatem facere voluptatum voluptas minus modi. Eligendi ipsa, eum repellendus soluta id suscipit. Mollitia itaque quidem, fugit consequatur inventore, minus libero nulla ab accusantium enim voluptas ducimus nesciunt soluta, sunt eaque vitae doloremque sint quae optio! Saepe exercitationem quod maxime nisi tempora fugit delectus, rem, quaerat beatae possimus accusamus odio minima cumque reiciendis corporis enim.</p>
        <Link to='/'>
        <button className='mt-6 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-700'>Back</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-x-20'>
        {list.map((item)=>(
        <Cards key={item.id} item={item}/>

        ))}
      
      </div>
    </div>
    </>
  )
}

export default Course
