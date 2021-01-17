import React, { useContext } from 'react'
import { actionsCounter } from '../status/statusItem'

import { StatusCounterElement } from './styles'
import like from '../../assets/icons/like-icon.svg'
import dislike from '../../assets/icons/dislike-icon.svg'
import happy from '../../assets/icons/happy-icon.svg'

const StatusCounter = React.memo(() => {
    const { likes, dislikes, happies, commentsCount } = useContext(actionsCounter)

    return(
        <StatusCounterElement>
            <div className="counter-reactions">
                <div className="counter__icons">
                    <ul>
                        { likes ? <li className="counter__like"><img src={ like } alt="like" /></li> : '' }
                        { dislikes ? <li className="counter__dislike"><img src={ dislike } alt="dilike" /></li> : '' }
                        { happies ? <li className="counter__happy"><img src={ happy } alt="dilike" /></li> : '' }
                    </ul>
                </div>
                { likes || dislikes || happies ?  <span>{ likes + dislikes + happies }</span> : null }
            </div>
            <span className="counter-comments">{ commentsCount } comentarios</span>
        </StatusCounterElement>
    )
})

export default StatusCounter