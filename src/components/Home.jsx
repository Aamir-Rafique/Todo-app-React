import React, { useState, useEffect } from "react";

const Main = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const [editId, setEditId] = useState(null);


    // Load from localStorage
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos"));
        if (savedTodos) {
            setTodos(savedTodos);
        }
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
                    date: new Date().toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                    }),
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
        <div className='w-full py-[3rem] flex justify-center md:py-[3rem] ' >

            <div className="container w-[90%]  md:w-[50%] px-[0.7rem] py-[0.8rem] gap-[0.5rem] bg-[#c38bff89] rounded-md flex flex-col justify-center   md:px-[2rem] md:py-[1rem] md:gap-[1rem]">
                <p className=" px-6 md:px-6 text-[0.84rem]  md:text-[1rem] text-gray-200 " >📅 {currentDay} </p>

                <form className="flex justify-evenly py-[0.6rem] md:py-[1rem] " onSubmit={addTodo} >
                    <input type="text"
                        value={task}
                        onChange={handleChange}
                        placeholder='Enter task here'
                        className='w-[70%] md:w-[70%]  text-center px-[0.5rem] py-[0.4rem] md:p-[0.5rem] text-[1rem] md:text-[1.4rem] bg-white/70 outline-none focus:ring-2   ring-blue-600  duration-200 rounded-[8px]' />
                    <button className='rounded-[8px] px-[0.4rem] md:px-[1rem] py-[0.3rem] md:py-[0.5rem] text-[0.9rem] md:text-[1.2rem] cursor-pointer bg-purple-700 text-white font-bold hover:bg-purple-800 hover:ring-2 hover:ring-purple-900 active:ring-2 active:ring-purple-900 active:bg-purple-700 duration-200' type='submit' > {editId ? "Update" : "Add"} </button>
                </form>

                {/* only show these filter buttons when the any task is marked completed for the first time */}
                {todos.some(todo => todo.completed) && (<div className="flex px-6 md:px-6 gap-3 md:gap-4 mt-0.5 ">
                    <button onClick={() => setFilter("all")} className="px-2 py-1 text-[0.7rem] md:text-[0.9rem]             bg-[#b16bfbce] text-white rounded-lg shadow hover:bg-purple-400 active:bg-blue-600 transition-all duration-150" >Show All</button>
                    <button onClick={() => setFilter("completed")} className="px-2 py-1 text-[0.7rem] md:text-[0.9rem] bg-[#49f36be9] text-white rounded-lg shadow hover:bg-green-400  active:bg-green-400  transition-all duration-150">Completed</button>
                </div>)}

                <div className="tasks flex px-[0rem] md:px-[1rem] ">
                    <ul className="p-0 list-none  w-[100%] md:w-[98%]" >
                        {filteredTodos.map((todo) => (
                            <li key={todo.id} className={(todo.completed) ? "p-1 line-through text-gray-600 flex justify-between mt-2 bg-[#49f36bac] rounded-[4px]" : " p-1 flex justify-between mt-2 bg-[#b16bfb82] rounded-[4px]"} >
                                <div className="w-[76%]  flex justify-between items-center gap-1.5 md:gap-2" >
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => toggleComplete(todo.id)}
                                        className="h-3.5 w-3.5"
                                        title={(todo.completed) ? "Unmark" : "Mark as done"}
                                    />
                                    <div className="flex items-center justify-between  w-[95%] ">
                                        <p className="w-[85%] text-white break-words text-left text-[0.9rem] -300 md:text-[1.3rem]" >{todo.text}</p><small className="text-[0.7rem] font-bold  md:text-[0.85rem] text-yellow-300" >{todo.date}</small>
                                    </div>
                                </div>
                                <div className="modify-tasks flex gap-[1rem] ml-2 md:gap-[2rem] mr-1 md:mr-4">
                                    <button className=' cursor-pointer text-blue-100 hover:text-blue-700  active:text-blue-700 duration-150' title="Edit Todo" onClick={() => editTodo(todo.id)}><lord-icon
                                        src="https://cdn.lordicon.com/exymduqj.json"
                                        trigger="hover"
                                        stroke="bold"
                                        colors="primary:#ffffff,secondary:#e4e4e4"
                                        style={{ width: 25, height: 25 }}>
                                    </lord-icon></button>
                                    <button className='cursor-pointer text-red-100 hover:text-red-500 active:text-red-500 duration-150' title="Delete Todo" onClick={() => deleteTodo(todo.id)}>
                                        <lord-icon
                                            src="https://cdn.lordicon.com/jzinekkv.json"
                                            trigger="hover"
                                            stroke="bold"
                                            colors="primary:#ffffff,secondary:#e4e4e4"
                                            style={{ width: 25, height: 25 }}>
                                        </lord-icon>
                                    </button>
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
