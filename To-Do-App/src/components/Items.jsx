/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import {MdDeleteForever, MdCheck, MdCancel} from "react-icons/md"

function Item({data, deleteHandler, updateStatus}) {
return (
        <div className='item-sec'>
            <div className='item-box'>
                {data.complete ? <MdCheck onClick={()=> updateStatus(data.id)} className='check'/> : <MdCancel onClick={()=> updateStatus(data.id)} className='cancel'/>}
                <p className='info' style={{textDecoration : data.complete ? 'line-through': 'none'}}>{data.todoTitle}</p>
            </div>
            <MdDeleteForever onClick={()=> deleteHandler( data.id)} className='delete' />
        </div>
)
}

export default Item;
