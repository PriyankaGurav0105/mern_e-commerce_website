/**
 * Functional component for displaying a title with two text elements.
 * @param {{string}} text1 - The first text element to display.
 * @param {{string}} text2 - The second text element to display.
 * @returns JSX element representing the title with the two text elements.
 */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-gray-500'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
        {/* using the bellow p tag for line */}
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
      
    </div>
  )
}

export default Title
