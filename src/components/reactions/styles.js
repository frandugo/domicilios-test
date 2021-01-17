import styled, { keyframes } from 'styled-components'
import { whiteColor, greyColor } from '../../styles/colors'

const animateFadeIn = keyframes`
 0% { opacity: 0; bottom: 0 }
 100% { opacity: 1; bottom: -50px }
`

const animateIcon = keyframes`
    0% { 
        opacity: 0;
        top: -100%;  
    }
    100% { 
        opacity: 1;
        top: 0;
    }
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
        position: relative;
        text-align: center;
        transition: background 0.2s ease-out;
        top: 0;
        width: 31px;
        &:first-child{ margin: 0; }
        &--like{
            animation: ${ animateIcon } 0.4s;
            background: #2F86FC;
            &:hover{ background: #2973D8 }
        }
        &--dislike{
            animation: ${ animateIcon } 0.6s;
            background: #FE5858;
            &:hover{ background: #C73131 }
        }
        &--happy{
            animation: ${ animateIcon } 0.8s;
            background: #FFC036;
            &:hover{ background: #D79C1D }
        }
        img{
            vertical-align: middle;
            width: 13px;
        }
    }
`

