/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Filter({filterType}) {
return (
    <div className='filter'>
        <button onClick={()=> filterType ("all")} className='filter-btn' type='button'>All</button>
        <button onClick={()=> filterType ("active")}className='filter-btn' type='button'>Active</button>
        <button onClick={()=> filterType ("complete")}className='filter-btn' type='button'>Completed</button>
    </div>
)
}

export default Filter
