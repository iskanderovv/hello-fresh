import React from 'react';
import boxImg from '../../images/box.png';
import { Info, StyledButton, Title } from '../style';

const Box = () => {
    return (
        <div className='max-w-[1170px] mx-auto px-2 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 place-items-center py-6'>
            <img src={boxImg} width='100%' alt="" />
            <div className='p-4'>
                <Title className='mb-5 text-center'>What’s inside each box?</Title>
                <ul className='flex flex-col gap-2 mb-8'>
                    <Info>✓ Easy-to-follow recipes with clear nutritional info</Info>
                    <Info>✓ High-quality ingredients sourced straight from the farm</Info>
                    <Info>✓ Convenient meal kits that fit perfectly in the fridge</Info>
                    <Info>✓ A fun cooking experience that makes you feel unstoppable</Info>
                    <Info><a href="#">✓ Innovative packaging designed to reduce waste</a></Info>
                </ul>
                <StyledButton className='w-full'>View our plans</StyledButton>
            </div>
        </div>
    )
}

export default Box
