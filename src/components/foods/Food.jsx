import React from 'react'
import { Info, StyledButton, Title } from '../style';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import './Food.css'

const Food = (props) => {
    const slideLeft = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    return (
        <div className='max-w-[1170px] mx-auto px-2 flex flex-col items-center mt-8 py-10 text-center'>
            <Title>Over 30+ fresh recipes every week</Title>
            <Info>Easy meals designed by professional chefs and nutritionists</Info>
            <div id="main-slider-container" className='my-6'>
                <MdChevronLeft size={40} className="slider-icon left mx-2" onClick={slideRight} />
                <div id="slider">
                    {
                        props.slides.map((slide, index) => {
                            return (
                                <div className="slider-card" key={index} onClick={() => slide.clickEvent()}>
                                    <div className="slider-card-image" style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }}>
                                        <div className="shadow-slider">
                                            <p className="slider-card-title">{slide.title}</p>
                                            <span className={`slider-card-description sliderr-card-description-${index}`}>{slide.description}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <MdChevronRight size={40} className="slider-icon right mx-2" onClick={slideLeft} />
            </div>
            <StyledButton variant='outline'>View our menus</StyledButton>
        </div>
    )
}

export default Food
