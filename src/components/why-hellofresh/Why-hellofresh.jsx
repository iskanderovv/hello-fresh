import React from 'react'
import { StyledButton, Title } from '../style';
import WhyHelloFreshItem from '../why-hellofresh-item/why-hellofresh-item';

const WhyHellofresh = ({ data }) => {
    return (
        <div className='bg-[#F8F8F8] py-10 text-center'>
            <div className='max-w-[1170px] mx-auto px-2'>
                <Title className='mb-8'>Why HelloFresh?</Title>
                <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-[30px]'>
                    {data.map(item => {
                        return (
                            <WhyHelloFreshItem img={item.img} title={item.title} info={item.info} />
                        )
                    })}
                </div>
                <StyledButton variant = 'outline' className='mt-6'>Get Started</StyledButton>
            </div>
        </div>
    )
}

export default WhyHellofresh
