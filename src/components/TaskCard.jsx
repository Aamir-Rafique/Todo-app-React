import React from 'react'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaskCard = ({ task }) => {
    return (
        <>
            <li className="tasks flex bg-red-400 justify-between p-[1rem]" >
                <div className="taskWithId flex bg-amber-200">
                    <h3>{task.id}</h3>
                    <p className='text-black' >{task.text}</p>
                </div>
                <div className="modify-tasks flex gap-[2rem] ">
                    <button className='px-[2rem] cursor-pointer bg-blue-400' ><FontAwesomeIcon icon={faPenToSquare} /></button>
                    <button className='px-[2rem] cursor-pointer bg-blue-400' ><FontAwesomeIcon icon={faTrash} /></button>
                </div>
            </li>
        </>
    )
}

export default TaskCard
