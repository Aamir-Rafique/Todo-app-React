import React, { useState } from 'react'
import TaskCard from './TaskCard';
import { v4 as uuidv4 } from 'uuid';


const Main = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);


    const addTask = (e) => {
        e.preventDefault();
        if (todo.trim() !== "") {
            setTodos(todo);
            setTodos([...todos, { id: uuidv4(), text: todo, isCompleted: false }])
        }
        setTodo("");
    }


    return (
        <div className='w-full bg-sky-300 py-[3rem] flex justify-center' >
            <div className="container w-[50%] px-[2rem] py-[1rem] bg-emerald-500 rounded-md flex flex-col justify-center gap-[1rem] ">

                <form className="add-tasks bg-amber-200  flex justify-evenly p-[1rem]" onClick={addTask} >
                    <input type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        placeholder='Enter task here'
                        className='w-[70%] text-center p-[0.5rem] text-2xl bg-blue-500 text-white' />

                    <button className='px-[2rem] py-[1rem] cursor-pointer bg-red-400' type='submit' > Add </button>
                </form>


                {todos.map((task) => (<TaskCard task={task} key={task.id} />))}

            </div>
        </div>
    )
}

export default Main
