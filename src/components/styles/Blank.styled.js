import styled from 'styled-components'

export const StyledBlank = styled.section`
    width: 53.125%;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        height: 400px;
        width: 100%;
    }
`