import React, { useState } from 'react'
import TaskCard from './TaskCard';

const Main = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        // alert(todo);

        if (!task.trim()) {
            setTodos(task);
        }
        console.log(todos);

        setTask('');
    }



    return (
        <div className='w-full bg-sky-300 py-[3rem] flex justify-center' >
            <div className="container w-[50%] px-[2rem] py-[1rem] bg-emerald-500 rounded-md flex flex-col justify-center gap-[1rem] ">

                <form className="add-tasks bg-amber-200  flex justify-evenly p-[1rem]" onClick={addTask} >
                    <input type="text"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder='Enter task here'
                        className='w-[70%] text-center p-[0.5rem] text-2xl bg-blue-500 text-white' />

                    <button className='px-[2rem] py-[1rem] cursor-pointer bg-red-400' type='submit' > Add </button>
                </form>

                {/* {(todos.length > 0 && */}
                    {/* // { todos.map((task) => (<TaskCard task={task} key={task.id} />)) })} */}

            </div>
        </div>
    )
}

export default Main
