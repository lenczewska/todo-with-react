import React, { useState } from 'react'
import TodoHeader from './TodoHeader'
import TodoInp from './TodoInp'
import TodoList from './TodoList'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function TodoBox() {

    const [value, setValue] = useState("")
    const [tasks, setTasks] = useState([])


    const addTodo = () => {
        if (!value.trim()) {
            toast.warn("Boş buraxma da bunu...")
            return
        }

        setTasks([...tasks, value])
        setValue("")
        toast.success('Elavə edildi, qaldı həll eləmək...')
    }



    const handleDelete = (index) => {
        setTasks(tasks.filter((_, i) => i !== index))
        toast.info('Həll olduuu')
    }



    return (
        <div className='h-screen flex justify-center items-center bg-amber-200'>
            <div className='bg-white w-[500px] flex flex-col gap-10 p-6 rounded-xl '>
                <TodoHeader title="Todo List" />
                <TodoInp value={value} setValue={setValue} addTodo={addTodo} />
                <TodoList tasks={tasks} handleDelete={handleDelete} />
            </div>

        </div>
    )
}

export default TodoBox
