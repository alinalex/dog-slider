import React from "react";
import noData from '../../assets/images/noData.png'
import { StyledIntermediaryState } from "../styles/Slider.styled";

const NoData = () => {

    return (
        <StyledIntermediaryState>
            <img src={noData} alt="no-data" />
            <div className="message">We're very sorry, but our dog ate the data. Please try again.</div>
        </StyledIntermediaryState>
    )
}

export default NoData