import React from "react";
import { StyledIntermediaryState } from "../styles/Slider.styled";
import loading from "../../assets/images/loading.webp"

const Loading = () => {

    return (
        <StyledIntermediaryState>
            <img src={loading} alt="loading" />
            <div className="message">Doggo data in progress...</div>
        </StyledIntermediaryState>
    )
}

export default Loading