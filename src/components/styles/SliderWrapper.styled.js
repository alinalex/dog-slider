import styled from 'styled-components'

export const StyledSliderWrapper = styled.section`
    flex: 1;
    background: ${({ theme }) => theme.colors.slider};
    align-items: center;
    justify-content: center;
    display: flex;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex: auto;
        height: 800px;
    }
`