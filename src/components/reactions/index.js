import React, { useContext } from 'react'
import { actionsCounter } from '../status/statusItem'

import { ReactionElement } from './styles'
import like from '../../assets/icons/like-icon.svg'
import dislike from '../../assets/icons/dislike-icon.svg'
import happy from '../../assets/icons/happy-icon.svg'

const Reactions = React.memo(() => {
    const { likes, setLikes, dislikes, setDislikes, happies, setHappies, showReaction, setShowReaction } = useContext(actionsCounter)
    const handleReactionLike = () => {
        setLikes( likes + 1)
        setShowReaction(!showReaction)
    }
    const handleReactionDislike = () => {
        setDislikes( dislikes + 1)
        setShowReaction(!showReaction)
    }
    const handleReactionHappy = () => {
        setHappies( happies + 1)
        setShowReaction(!showReaction)
    }
    return (
        <ReactionElement>
            <button className="status__reactions status__reactions--like" onClick={ handleReactionLike }><img src={ like } alt="like" /></button>
            <button className="status__reactions status__reactions--dislike" onClick={ handleReactionDislike }><img src={ dislike } alt="like" /></button>
            <button className="status__reactions status__reactions--happy" onClick={ handleReactionHappy }><img src={ happy } alt="like" /></button>
        </ReactionElement>
    )
})

export default Reactions