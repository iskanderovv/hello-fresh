import React from 'react';
import './Hero.css';
import { StyledButton } from '../style'

const Hero = () => {
    return (
        <div className='bg-hero h-[650px] bg-center bg-cover flex justify-center items-center text-center'>
            <div>
                <h2 className='pb-6 font-normal text-4xl font-verdana'>Take the stress</h2>
                <h2 className='font-normal text-4xl font-verdana'>out of mealtime</h2>
                <p className='mt-10 mb-8'>America's Most Popular Meal Kit</p>
                <StyledButton>View our plans</StyledButton>
            </div>
        </div>
    )
}

export default Hero
