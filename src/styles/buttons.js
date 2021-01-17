import styled from 'styled-components'
import { secondColor, secondColorHover, whiteColor } from './colors'

export const Button = styled.button`
    background: ${ secondColor };
    border: 0;
    border-radius: 4px;
    color: ${ whiteColor };
    cursor: pointer;
    outline: none;
    padding: 0.5rem 2rem;
    transition: background 0.2s ease-out; 
    &:hover{
        background: ${ secondColorHover }; 
    }
`