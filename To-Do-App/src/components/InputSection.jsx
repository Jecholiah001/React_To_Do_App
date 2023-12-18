/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

function InputSection ({addHandler}) {
    const [item, setItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //Add item to list
        addHandler(item);
        setItem("");
    }
return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <div className='main-input'>
                <input
                    required value={item}
                    onChange={(e) => setItem(e.target.value)}
                    type='text' placeholder='Create new ToDo item'></input>
            </div> 
            <button className='btn' type='submit'>Add</button>
        </form>
    </div>

)
}

export default InputSection;
