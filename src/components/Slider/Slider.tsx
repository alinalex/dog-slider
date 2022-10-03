import React, { useState } from "react";
import { Status, Dog } from '../../data/types';
import { StyledSlider } from "../styles/Slider.styled";
import Loading from "./Loading";
import NoData from "./NoData";
import SliderCarousel from "./SliderCarousel";

const Slider = ({ status, data }: { status: Status, data: Dog[] }) => {
    const [current, setCurrent] = useState(0);
    const length = data.length;

    const goToNextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const goToSlide = (index: any) => {
        setCurrent(index);
    }

    return (
        <StyledSlider>
            {
                status === 'loading' ?
                    <Loading />
                    : status === 'error' ?
                        <NoData />
                        :
                        <SliderCarousel
                            current={current}
                            data={data}
                            goToNextSlide={goToNextSlide}
                            goToSlide={goToSlide}
                        />
            }
        </StyledSlider>
    )
}

export default Slider