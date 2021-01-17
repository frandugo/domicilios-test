import styled, { keyframes } from 'styled-components'
import { whiteColor, greyColor } from '../../styles/colors'

const animateFadeIn = keyframes`
 0% { opacity: 0; bottom: 0 }
 100% { opacity: 1; bottom: -50px }
`

export const ReactionElement = styled.div`
    animation: ${ animateFadeIn } 0.8s;
    background: ${ whiteColor };
    box-shadow: 0 0 2px 2px ${ greyColor };
    border-radius: 30px;
    bottom: -50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 7px;
    padding: 0.5rem;
    position: absolute;
    z-index: 3;
    .status__reactions{
        border: 0;
        border-radius: 100%;
        cursor: pointer;
        height: 31px;
        line-height: 31px;
        outline: none;
        text-align: center;
        transition: background 0.2s ease-out;
        width: 31px;
        &:first-child{ margin: 0; }
        &--like{
            background: #2F86FC;
            &:hover{ background: #2973D8 }
        }
        &--dislike{
            background: #FE5858;
            &:hover{ background: #C73131 }
        }
        &--happy{
            background: #FFC036;
            &:hover{ background: #D79C1D }
        }
        img{
            vertical-align: middle;
            width: 13px;
        }
    }
`

