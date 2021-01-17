import React, { useState } from 'react'
import Comments from './comments'
import CommentForm from './commentForm'
import { CommentContainer } from './styles'

export const commentsContext =  React.createContext({ comments: [], setComments: () => {} });

const CommentsComponent = React.memo(() => {
    const [ comments, setComments ] = useState([])
    return(
        <CommentContainer>
            <commentsContext.Provider value={{ comments, setComments }} >
                <Comments/>
                <CommentForm/>
            </commentsContext.Provider> 
        </CommentContainer>    
    )
})

export default CommentsComponent