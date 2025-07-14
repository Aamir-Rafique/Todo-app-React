import React from 'react'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaskCard = ({ task }) => {
    return (
        <>
            <div className="tasks flex bg-red-400 justify-between p-[1rem]" >
                {/* <h3>{task.number}</h3> */}
                <p>{task.title}</p>
                <div className="modify-tasks flex gap-[2rem] ">
                    <button className='px-[2rem] cursor-pointer bg-blue-400' ><FontAwesomeIcon icon={faPenToSquare} /></button>
                    <button className='px-[2rem] cursor-pointer bg-blue-400' ><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </div>
        </>
    )
}

export default TaskCard
