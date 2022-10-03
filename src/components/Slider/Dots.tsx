import React from "react";
import { Dog } from '../../data/types';
import { StyledDots } from '../styles/Slider.styled'

const Dots = ({ current, data, goToSlide }: { current: number, data: Dog[], goToSlide: any }) => {

    return (
        <StyledDots>
            {
                data.map((value: any, key: number) => (
                    <div
                        key={'dot' + value.id}
                        className={key === current ? 'dot active' : 'dot'}
                        onClick={() => goToSlide(key)}
                    >
                        <div className='inner-dot'></div>
                    </div>
                ))
            }
        </StyledDots>
    )
}

export default Dots