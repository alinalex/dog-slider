import React from "react";
import SliderItem from "./SlideItem";
import Dots from "./Dots";
import { Dog } from '../../data/types';

const SliderCarousel = ({ current, data, goToNextSlide, goToSlide }: { current: number, data: Dog[], goToNextSlide: any, goToSlide: any }) => {

    return (
        <>
            {
                data.map((elem: Dog, index: number) => (
                    <SliderItem
                        key={elem.id}
                        index={index}
                        current={current}
                        data={elem}
                        onContentClick={goToNextSlide}
                    />
                ))
            }
            <Dots
                current={current}
                data={data}
                goToSlide={goToSlide}
            />
        </>
    )
}

export default SliderCarousel