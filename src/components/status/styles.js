import styled, { keyframes } from 'styled-components'
import { mainColor, whiteColor, greyColor, greyDarkColor, darkColor, blackColor } from '../../styles/colors'

const animateFadeIn = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`
export const StatusItemElement = styled.div`
    animation: ${ animateFadeIn } 0.7s;
    background: ${ whiteColor };
    box-shadow: 0 0 1px 1px ${ greyColor };
    margin-bottom: 1.5rem;
    &:last-child{ margin-bottom: 0; }
    .status{
        &__info{
            display: grid;
            grid-template-columns: 50px 1fr;
            gap: 25px;
            padding: 1rem 0.9rem;
        }
        &__avatar{
            border-radius: 100%;
            height: 50px;
            opacity: 0.7;
            overflow: hidden;
            width: 50px;
            img{
                height: 100%;
                object-fit: contain;
                width: 100%auto;
            }
        }
        &__user{
            padding-right: 1rem;
            h3{ 
                color: ${ mainColor };
                font-size: 1rem;
                margin-bottom: 0.2rem;
            }
            p{
                color: ${ blackColor };
                font-size: 0.9rem;
                margin-bottom: 1rem;
                line-height: 1rem;
            }
        }
        &__date{
            color: ${ greyDarkColor };
            display: block;
            font-size: 0.6rem;
            margin-bottom: 1rem;
        }
        &__actions{
            display: flex;
            position: relative;
            &-button{
                background: transparent;
                border: 0;
                color: ${ mainColor };
                cursor: pointer;
                outline: none;
                &:first-child{ margin-right: 2rem; }
            }
        }
        &__reactions{
            &--actions{
                display: none;
            }
        }
    }
`

export const FormStatusElement = styled.div`
    background: ${ whiteColor };
    box-shadow: 0 0 1px 1px ${ greyColor };
    margin-bottom: 1rem;
    textarea{
        border: 0;
        color: ${ darkColor };
        font-family: Roboto, sans-serif;
        font-weight: 400;
        min-height: 40px;
        outline: none;
        padding: 0.8rem;
        resize: none;
        width: 100%;
        &::placeholder {
            color: ${ mainColor };
        }
    }
    .button{
        border-top: 1px solid ${ greyColor };
        text-align: right;
        padding: 0.6rem;
    }
`

export const StatusCounterElement = styled.div`
    align-items: center;
    animation: ${ animateFadeIn } 0.7s;
    border-top: 1px solid ${ greyColor };
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0.9rem;
    .counter{
        &-reactions{
            align-items: center;
            display: flex;
            ul{ 
                display: flex;
                margin-right: 0.6rem;
            }
            li{ 
                align-items: center;
                border-radius: 100%;
                display: flex;
                justify-content: center;
                height: 23px;
                list-style: none;
                text-align: center;
                width: 23px;
                img{ width: 15px; }
            }
            span{
                font-weight: bold;
                font-size: 0.8rem;
                color: ${ mainColor }
            }
        }
        &__like{ background: #2F86FC; }
        &__dislike{ 
            background: #FE5858; 
            margin-left: -5px;
        }
        &__happy{ 
            background: #FFC036; 
            margin-left: -5px;
        }
        &-comments{
            color: ${ greyDarkColor };
            font-size: 12px;
        }
    }
`