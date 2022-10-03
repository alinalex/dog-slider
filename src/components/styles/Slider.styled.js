import styled from 'styled-components'

export const StyledSlider = styled.div`
    position: relative;
    max-width: 400px;
`

export const StyledSliderItem = styled.div`
    opacity: 0;
    transition: 1.5s ease-in-out;
    text-align: center;

    &.active {
        opacity: 1;
        transition-duration: 1.5s;
    }

    .dog-image-wrapper {
        padding-bottom: 163px;
        height: 365px;
        display: flex;
        align-items: end;
        justify-content: center;
        
        img {
            cursor: pointer;
        }
    }

    .breed {
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 1.5px;
        color: ${({ theme }) => theme.colors.slideText};
        margin-bottom: 20px;
        cursor: pointer;
    }

    .temperament {
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.35px;
        color: ${({ theme }) => theme.colors.slideText};
        mix-blend-mode: normal;
        opacity: 0.8;
        cursor: pointer;
    }
`

export const StyledDots = styled.div`
    position: absolute;
    bottom: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: auto;

    .dot {
        width: 26px;
        height: 26px;
        border: 1.5px solid transparent;
        margin-right: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        transition: all .3s ease-in-out;
        cursor: pointer;
        
        .inner-dot {
            width: 5px;
            height: 5px;
            background: ${({ theme }) => theme.colors.dot};
            border-radius: 100%;
        }

        &:last-child {
            margin-right: 0px;
        }
        
        &:hover {
            border-color: ${({ theme }) => theme.colors.dot};
        }
        
        &.active {
            border-color: ${({ theme }) => theme.colors.dotActive};

            .inner-dot {
                background: ${({ theme }) => theme.colors.dotActive};
            }
        }
    }
`

export const StyledIntermediaryState = styled.div`
    text-align: center;
    
    img {
        width: 100%;
        margin-bottom: 20px;
    }

    .message {
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        color: ${({ theme }) => theme.colors.slideText};   
    }
`