import React, { useState } from 'react'

const AddList = ({ data, setData }) => {
    const [text, setText] = useState('')

    const saveData = (e) => {
        e.preventDefault()
        const newData = {
            id: new Date().getTime(),
            text,
            done: false
        }
        setData([...data, newData])
        setText('')
    }

    return (
        <div className="card">
            <form onSubmit={saveData} className='inputs-form'>
                <input
                    placeholder='Add a new task...'
                    value={text}
                    className='field-input'
                    onChange={(e) => setText(e.target.value)}
                    required
                />
                <button type='submit' className='btn-add' disabled={text.trim() === ""}>
                    + Add
                </button>
            </form>
        </div>
    )
}

export default AddList
