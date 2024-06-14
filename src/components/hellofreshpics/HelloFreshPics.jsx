import React from 'react';
import HelloFreshPicsItem from '../hellofreshpics-item/HelloFreshPicsItem';
import { Info, Title } from '../style';

const HelloFreshPics = ({ helloFreshPics }) => {
    return (
        <div className='max-w-[1170px] px-4 mx-auto my-10 text-center'>
            <Title className='mb-7'>Cook it. Love it. Tag it #HelloFreshPics</Title>
            <Info>Follow us on Instagram @hellofresh</Info>
            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 gap-y-4 justify-items-center mt-14'>
                {helloFreshPics.map((item, index) => {
                    return (
                        <HelloFreshPicsItem 
                            key={index}
                            image={item.image} 
                            title={item.title} 
                            description={item.description} 
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default HelloFreshPics;
