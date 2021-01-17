import React, { useContext } from 'react'
import CommentItem from './commentItem'

import { commentsContext } from './index'

const Comments = React.memo(() => {
    const { comments } = useContext(commentsContext)
    console.log('<Comments/> ', comments);
    return(
        <>
            { comments.map((item,index) => <CommentItem key={index} user={ item.name } comment={ item.comment }  date={ item.date } />) }
        </>    
    )
})

export default Comments