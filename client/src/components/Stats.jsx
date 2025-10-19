import React from 'react'

const Stats = ({ data }) => {
    const totalTasks = data.length
    const doneTasks = data.filter(item => item.done).length
    const remainingTasks = totalTasks - doneTasks

    return (
        <div className='stats-bar'>
            <span>Total: {totalTasks}</span>
            <span>Completed: {doneTasks}</span>
            <span>Remaining: {remainingTasks}</span>
        </div>
    )
}

export default Stats
