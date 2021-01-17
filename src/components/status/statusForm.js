import React  from 'react'
import { FormStatusElement } from './styles'
import { Button } from '../../styles/buttons'

const StatusForm = ({ addStatus }) => {
    const handleSubmit = (e) => {
        e.preventDefault();  
        const getText = e.target[0].value !== '' ? addStatus({ status: e.target[0].value, date: Date.now() }) : ''
        e.target[0].value = ''
        return getText
    }

    return(
        <FormStatusElement>
            <form onSubmit={ handleSubmit }>
                <textarea placeholder="Escribe aqui tu estado" required></textarea>
                <div className="button">
                    <Button>Publicar</Button>
                </div> 
            </form>  
        </FormStatusElement>      
    )
}

export default StatusForm
