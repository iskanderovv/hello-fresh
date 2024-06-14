import React from 'react';
import { Info, Subtitle } from '../style';

const WhyHelloFreshItem = ({img, title, info}) => {
  return (
    <div className='flex flex-col justify-center items-center px-8'>
      <img width="120px" height="120px" src={img} alt="why hello fresh" />
      <Subtitle className='pt-7 pb-3.5'>{title}</Subtitle>
      <Info>{info}</Info>
    </div>
  )
}

export default WhyHelloFreshItem
