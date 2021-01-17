import React, { useState  } from 'react'
import Comments from '../comments/'
import StatusCounter from './statusCounter'
import Reactions from '../reactions'
import { StatusItemElement } from './styles'
import avatar from '../../assets/avatar.jpg'

export const actionsCounter =  React.createContext();

const StatusItem = React.memo(({ status, date }) => {

    const setDate = new Date(date);
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)
    const [happies, setHappies] = useState(0)
    const [commentsCount, setCommentsCount] = useState(0)
    const [showComment, setShowComment] = useState(false)
    const [showReaction, setShowReaction] = useState(false)

    const handleShowComment = () => setShowComment(true)
    const handleShowReaction = () => setShowReaction(!showReaction)

    return (
        <actionsCounter.Provider value={{
            likes, setLikes, 
            dislikes, setDislikes, 
            happies, setHappies, 
            commentsCount, setCommentsCount,
            showReaction, setShowReaction
        }}>
            <StatusItemElement data-testid="status-item">
                <div className="status">
                    <div className="status__info">
                        <div className="status__avatar">
                            <img src={ avatar } alt="User" />
                        </div>
                        <div className="status__user">
                            <h3>Juan Rodriguez</h3>
                            <span className="status__date">Hace <time>{ setDate.toDateString() }</time></span>
                            <p>{ status }</p>
                            <div className="status__actions">
                                <button className="status__actions-button" onClick={ handleShowReaction }>Reaccionar</button>
                                <button className="status__actions-button" onClick={ handleShowComment } >Comentar</button>
                                { showReaction && <Reactions  /> }
                            </div>    
                        </div>
                    </div>
                    { commentsCount || likes || dislikes || happies ? <StatusCounter/> : null }
                    { showComment && <Comments/> }
                </div>    
            </StatusItemElement>
        </actionsCounter.Provider>    
    )
})

export default StatusItem

