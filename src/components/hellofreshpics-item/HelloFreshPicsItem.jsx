import React from 'react';
import { Info, Subtitle } from '../style';

const HelloFreshPicsItem = ({ image, title, description }) => {
  return (
    <div className='max-w-[300px]'>
      <img src={image} alt={title} className='w-full h-auto' />
      <div className='px-8'>
        <Subtitle className='mt-7 mb-2.5'>{title}</Subtitle>
        <Info className='lg:max-w-[176px] md:max-w-[176px]'>{description}</Info>
      </div>
    </div>
  )
}

export default HelloFreshPicsItem;
