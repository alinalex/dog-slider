import styled from 'styled-components'

export const StyledMain = styled.main`
    display: flex;
    width: 100%;
    height: 100vh;
    background: ${({ theme }) => theme.colors.body};

    @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 100%;
        flex-direction: column;
    }
`