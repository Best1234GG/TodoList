import React from 'react'

const ShowTask = ({ data, setData, isEdit, editText, setEditText, handleEditStart, handleEditSave, handleToggleDone }) => {
    const delete_Data = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    return (
        <div className="card">
            <div className="task-header">📋 Your Tasks ({data.length})</div>
            <div className="task-list">
                {data.length === 0 ? (
                    <div className="task-empty">
                        <p>🗒️ No tasks yet!</p>
                        <small>Add your first task above</small>
                    </div>
                ) : (
                    data.map((item) => (
                        <div key={item.id} className="task-item">
                            {item.id === isEdit ? (
                                <>
                                    <input
                                        type="text"
                                        className="edit-input"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                    />
                                    <button className="btn-save" onClick={handleEditSave}>Save</button>
                                </>
                            ) : (
                                <>
                                    <li className={item.done ? "task-done" : ""}>{item.text}</li>
                                    <button className="btn-status" onClick={() => handleToggleDone(item.id)}>
                                        {item.done ? "✅ Done" : "⏳ Pending"}
                                    </button>
                                    <button className="btn-edit" onClick={() => handleEditStart(item)}>✏ Edit</button>
                                    <button className="btn-del" onClick={() => delete_Data(item.id)}>🗑 Delete</button>
                                </>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default ShowTask
