import React from 'react'
import { CommentItemElement } from './styles'
import avatar from '../../assets/avatar.jpg'

const CommentItem = React.memo(({ user, comment, date }) => {
    const setDate = new Date(date);
    return(
        <CommentItemElement>
            <div className="comment">
                <div className="comment__avatar">
                    <img src={ avatar } alt="avatar" />
                </div>
                <div className="comment__data">
                    <div className="comment__user">
                        <span className="comment__user-info">{ user }</span>
                        <p className="comment__user-comment">{ comment }</p>
                    </div>   
                    <div className="comment__date">Hace <time>{ setDate.toDateString() }</time></div> 
                </div>     
            </div>    
        </CommentItemElement> 
    )
})

export default CommentItem