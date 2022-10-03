import React from "react";
import { StyledSliderItem } from "../styles/Slider.styled";
import { Dog } from '../../data/types';

const SliderItem = ({ index, current, data, onContentClick }: { index: number, current: number, data: Dog, onContentClick: any }) => {

    return (
        <StyledSliderItem className={index === current ? 'slide active' : 'slide'}>
            {index === current && (
                <>
                    <div className="dog-image-wrapper">
                        <img src={data.image} alt={data.name} onClick={onContentClick} />
                    </div>
                    <div className="breed" onClick={onContentClick}>{data.name}</div>
                    <div className="temperament" onClick={onContentClick}>{data.temperament}</div>
                </>
            )}
        </StyledSliderItem>
    )
}

export default SliderItem