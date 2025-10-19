import React, { useState } from 'react'

const AddList = (props) => {
    const { data, setData } = props
    const [text, setText] = useState('')
    const saveData = (e) => {
        e.preventDefault();
        const newData = {
            id: new Date().getTime(),
            text: text,
            done: false
        }
        setData([...data, newData])
        setText('')

    }
    return (
        <div>
            <section>
                <form onSubmit={saveData}>
                    <input
                        placeholder='Add a new task...'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                    <button type='submit'>+ Add</button>
                </form>
            </section>
        </div>
    )
}

export default AddList
