import React from 'react'
import { Header } from './styles'

const HeaderContent = ({ user }) => {
    return (
        <Header>
            <div className="wrapper">
                <h1>Domicilios Test</h1>
                <div className="user">
                    <a href="/">Hola! <span>{ user }</span></a>
                </div>
            </div>    
         </Header>   
    )
}

export default HeaderContent