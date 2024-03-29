import { useState } from "react";
import { useTodo } from "../contexts/todoContext";

function TodoForm() {

    const [todoMsg, setTodoMsg] = useState('');
    const {addTodo} = useTodo();

    const onFormSubmit = (e) => {
        e.preventDefault()
        addTodo({todo: todoMsg})
        setTodoMsg('')
    }

    const onInputChange = (e) => setTodoMsg(e.target.value)

    return (
        <form onSubmit={onFormSubmit}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoMsg}
                onChange={onInputChange}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

