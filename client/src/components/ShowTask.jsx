import React from 'react'

const ShowTask = (props) => {
    const btn = {
        display: 'flex'
    }
    const { data, setData, isEdit, editText,
        setEditText, handleEditStart,
        handleEditSave, handleToggleDone } = props

    const delete_Data = (id) => {
        const result = data.filter((item) => item.id !== id)
        setData(result)
    }

    return (
        <div>
            <div>
                Your Tasks
            </div>
            <div>
                {data.map((item) => {
                    if (item.id === isEdit) {
                        return (
                            <div key={item.id}>
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={handleEditSave}>Save</button>
                            </div>
                        )
                    } else {
                        return (
                            <div key={item.id} style={btn}>
                                <li>{item.text}</li>
                                <button onClick={() => handleToggleDone(item.id)}>{item.done === true ? "Done" : "Remaining"}</button>
                                <button onClick={() => handleEditStart(item)}>Edit</button>
                                <button onClick={() => delete_Data(item.id)}>Del</button>
                            </div>
                        )
                    }
                })}
            </div>
        </div >
    )
}

export default ShowTask
