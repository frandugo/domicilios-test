import { createGlobalStyle } from 'styled-components'

const sizes = {
    mobile: '340px',
    tablet: '768px',
    desktop: '960px'
}

const device = {
    mobile: (styles) => {
        return `@media (min-width: ${sizes.mobile}){
            ${styles}
        }`
    },
    tablet: (styles) => {
        return `@media (min-width: ${sizes.tablet}){
            ${styles}
        }`
    },
    desktop: (styles) => {
        return `@media (min-width: ${sizes.desktop}){
            ${styles}
        }`
    }
}

const GlobalStyles = createGlobalStyle`
    *{ 
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        font-family: Roboto, sans-serif;;
        background: #F4F4F4;
        margin: 0;
        padding: 0;
    }
    .wrapper{
        margin: 0 auto;
        position: relative;
        ${
            device.mobile(
                `width: 100%`,
                `padding: 0 20px`
            )
        }
        ${
            device.tablet(
                `width: 100%`,
                `padding: 0 20px`
            )
        }
        ${
            device.desktop(
                `width: 960px` 
            )
        }
    }
    
`

export default GlobalStyles