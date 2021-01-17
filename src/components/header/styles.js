import styled from 'styled-components'

import { whiteColor, greyColor, darkColor } from '../../styles/colors'

export const Header = styled.header`
    background: ${ whiteColor  };
    box-shadow: 0 0 3px 1px ${ greyColor  };
    padding: 1rem;
    position: relative;
    text-align: center;
    h1{
        display: inline-block;
        font-size: 16px;
    }
    .user{
        align-items: center;
        display: flex;
        bottom: 0;
        margin: auto;
        position: absolute;
        right: 0;
        top: 0;
        a{
            color: ${ darkColor };
            font-size: 14px;
            text-decoration: none;
            span{
                font-weight: bold;
            }
        }
    }
`