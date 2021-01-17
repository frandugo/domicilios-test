import React, { useContext } from 'react'
import { FormCommentElement } from './styles'
import { commentsContext } from './index'
import { actionsCounter } from '../status/statusItem'

const FormComment = () => {
    const { commentsCount, setCommentsCount } = useContext(actionsCounter)
    const {  comments, setComments } = useContext(commentsContext)


    const handleComment = (e) => {
        if (e.keyCode === 13 && e.target.value.trim() !== '') {
            e.preventDefault()
            setComments([...comments, { comment: e.target.value, name: 'Elena', date: Date.now() }])
            setCommentsCount(commentsCount + 1)
            e.target.value = ''
        }
    }

    return (
        <FormCommentElement>
            <form>
                <textarea placeholder="Escribe un comentario" onKeyDown={(e) => handleComment(e) }></textarea>
            </form>    
        </FormCommentElement>    
    )
}

export default FormComment