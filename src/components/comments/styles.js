import styled, { keyframes } from 'styled-components'
import {  mainColor, whiteColor, greyColor, greyWhiteColor, greyDarkColor, darkColor } from '../../styles/colors'

const animateFadeIn = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`

export const CommentContainer = styled.div`
    background: ${ greyWhiteColor };
    box-shadow: 0 2px 2px 1px ${ greyColor };
    border-top: 1px solid ${ greyColor };
    padding: 1rem;
`

export const FormCommentElement = styled.div`
    animation: ${ animateFadeIn } 0.7s;
    background: ${ whiteColor };
    box-shadow: 0 0 1px 1px ${ greyColor };
    textarea{
        border: 0;
        border-radius: 4px;
        color: ${ darkColor };
        font-family: Roboto, sans-serif;
        font-weight: 400;
        min-height: 35px;
        outline: none;
        padding: 0.8rem;
        resize: none;
        width: 100%;
        &::placeholder {
            align-items: center;
            color: ${ greyColor };
            display: flex;
        }
    }
`

export const CommentItemElement = styled.div`
    animation: ${ animateFadeIn } 0.7s;
    padding: 0.2rem;
    .comment{
        display: grid;
        grid-template-columns: 40px 1fr;
        gap: 40px;
        margin-bottom: 20px;
        &:last-child{ margin-bottom: 0; }
        &:first-child{ margin-bottom: 20px; }
        &__avatar{
            border-radius: 100%;
            height: 40px;
            overflow: hidden;
            width: 40px;
            img{
                object-fit: contain;
                height: 100%;
                width: 100%;
            }
        }
        &__data{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        &__user{
            display: flex;
            font-size: 0.8rem;
            margin-bottom: 5px;
            &-info{ 
                color: ${ mainColor };
                font-weight: bold;
                margin-right: 10px; 
            }
            &-comment{
                color: ${ darkColor }
            } 
        }
        &__date{
            color: ${ greyDarkColor };
            font-size: 0.6rem;
        }
    }
`