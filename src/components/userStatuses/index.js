import React, { useState } from 'react'
import StatusForm from '../status/statusForm'
import Statuses from '../status'

import { Container } from '../../styles/container'

export const StatusContext = React.createContext();

const UserStatuses = () => {

    const [statuses, setStatuses] = useState([]);

    const addStatus = (newStatus) => {
        setStatuses([...statuses, newStatus])
    }

    return (
        <Container>
            <div className="wrapper">
                <StatusContext.Provider value={{ statuses, setStatuses }}>
                    <StatusForm addStatus={ addStatus } />
                    <Statuses statuses={ statuses } />
                </StatusContext.Provider>    
            </div>    
        </Container>    
    )
}

export default UserStatuses