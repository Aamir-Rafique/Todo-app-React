import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const [editId, setEditId] = useState(null)


    // Load from localStorage
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos"));
        if (savedTodos) setTodos(savedTodos);
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (e) => {
        e.preventDefault();
        if (task.trim() === "") return;

        if (editId) {
            // Editing existing todo
            setTodos(todos.map(todo =>
                todo.id === editId ? { ...todo, text: task } : todo
            ));
            setEditId(null);
        } else {
            // Adding new todo
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    text: task,
                    completed: false,
                    date: new Date().toLocaleDateString(),
                },
            ]);
        }

        setTask("");
    };


    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = (id) => {
        const todo = todos.find(t => t.id === id);
        setTask(todo.text); // pre-fill input
        setEditId(id);      // set current editing ID
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === "completed") return todo.completed;
        return true;
    });


    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const currentDay = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className='w-full py-[3rem] flex justify-center' >

            <div className="container w-[50%] px-[2rem] py-[1rem] bg-[#536ee4ac] rounded-md flex flex-col justify-center gap-[1rem] ">
                <p className="text-white" >📅 {currentDay} </p>

                <form className="add-tasks   flex justify-evenly p-[1rem]" onSubmit={addTodo} >
                    <input type="text"
                        value={task}
                        onChange={handleChange}
                        placeholder='Enter task here'
                        className='w-[70%] text-center p-[0.5rem] text-2xl bg-white/70 outline-none focus:ring-2   ring-blue-800 transition-all duration-200 rounded-[8px]' />

                    <button className='rounded-[8px] px-[2rem] py-[0.5rem] text-[1.3rem] cursor-pointer bg-purple-600 text-white hover:bg-purple-700' type='submit' > {editId ? "Update" : "Add"} </button>
                </form>

                {/* only show these filter buttons when the any task is marked completed for the first time */}
                {todos.some(todo => todo.completed) && (<div className="flex justify-center gap-4 mt-0.5">
                    <button onClick={() => setFilter("all")} className="px-2 py-1 text-[0.9rem] bg-blue-500 text-white  rounded-lg shadow hover:bg-blue-600 transition-all duration-200">Show All</button>
                    <button onClick={() => setFilter("completed")} className="px-2 py-1 text-[0.9rem] bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-all duration-200">Completed</button>
                </div>)}




                <div className="tasks flex px-[1rem] ">
                    <ul className="p-0 list-none  w-full" >
                        {filteredTodos.map((todo) => (
                            <li key={todo.id} className={(todo.completed) ? "p-1 line-through text-gray-600 flex justify-between mt-2 bg-[#56f676ac] rounded-[4px]" : " p-1 flex justify-between mt-2 bg-[#53d3e4ac] rounded-[4px]"} >
                                <div className="taskWithId flex gap-2.5 items-center">
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => toggleComplete(todo.id)}
                                        className="h-3.5 w-3.5"
                                        title={(todo.completed) ? "Unmark" : "Mark as done"}
                                    />
                                    <p className="truncate w-75 text-left" >{todo.text}</p><small>  {todo.date}</small>
                                </div>
                                <div className="modify-tasks flex gap-[2rem] mr-4">
                                    <button className=' cursor-pointer text-white hover:text-blue-700  duration-200' title="Edit Todo" onClick={() => editTodo(todo.id)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                    <button className='cursor-pointer text-white hover:text-red-500 duration-200' title="Delete Todo" onClick={() => deleteTodo(todo.id)}><FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default Main
