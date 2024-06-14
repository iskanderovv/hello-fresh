import React from 'react';
import './Plans.css';
import { StyledButton } from '../style';

const Plans = () => {
  return (
    <div className='h-[320px] flex justify-center items-center plans'>
      <div className='text-center '>
        <h3 className='font-verdana text-4xl font-normal'>Flexible Plans</h3>
        <p className='font-sourceSans text-xl font-normal mt-10 mb-8'>to meet your household's needs</p>
        <StyledButton>View our plans</StyledButton>
      </div>
    </div>
  )
}

export default Plans
