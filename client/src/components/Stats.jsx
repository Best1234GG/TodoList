import React from 'react'

const Stats = (props) => {
    const { data } = props

    const totalTasks = data.length
    const doneTasks = data.filter(item => item.done === true).length
    const remainingTasks = totalTasks - doneTasks

    return (
        <div>
            <hr />
            <h3>Task Summary</h3>
            <p>Total Tasks: {totalTasks}</p>
            <p>Tasks Done: {doneTasks}</p>
            <p>Tasks Remaining: {remainingTasks}</p>

        </div>
    )
}

export default Stats