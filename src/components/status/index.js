import React from 'react'

import StatusItem  from './statusItem'

const Statuses = ({ statuses }) => {
    return (
        <>
            { statuses.sort((a,b) => b.date - a.date ).map((item) => <StatusItem key={ item.date } status={item.status} date={ item.date } /> )}
        </>   
    )
}

export default Statuses