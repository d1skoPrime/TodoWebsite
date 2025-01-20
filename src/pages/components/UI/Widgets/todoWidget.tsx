import { useEffect, useState } from 'react'
import AddTaskBtn from '../Buttons/AddTaskBtn'

interface Props {}

const TodoWidget = (props: Props) => {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState<String[]>([])
    const savedTaskList = localStorage.getItem('todoList')
    const handleButtonClear = () => {
        setTasks([])
    }
    const handleButton = () => {
        if (task.trim() !== '') {
            setTasks((prevTasks) => [...prevTasks, task])
            setTask('')
        }
    }

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(tasks))
    }, [tasks])
    useEffect(() => {
        if (savedTaskList) {
            setTasks(JSON.parse(savedTaskList))
        }
    }, [])
    return (
        <div className="min-h-fit bg-gray-300 flex flex-col justify-center items-center rounded-xl min-w-[550px] m-auto">
            <h1 className="text-lg font-bold font-serif text-purple-700/90">
                Create your task!
            </h1>
            <div className="container flex justify-center items-center">
                <input
                    type="text"
                    id="user_text"
                    onChange={(e) => setTask(e.target.value)}
                    value={task}
                    className="outline-none bg-gray-400 rounded-lg w-full my-2 py-1 border-2 border-solid border-transparent text-blue-600
                    font-bold font-mono text-xl focus:border-purple-600 transition-colors duration-700 ease-linear placeholder-blue-600 placeholder:font-bold placeholder:font-mono mx-2"
                    placeholder="Create your TODO Task!"
                />
                <AddTaskBtn OnClick={handleButton}>Add</AddTaskBtn>
                <AddTaskBtn OnClick={handleButtonClear}>Clear</AddTaskBtn>
            </div>
            <div
                className="flex flex-col flex-wrap h-[32rem] gap-x-4 overflow-x-auto w-full"
                style={{
                    maxHeight: `${Math.ceil(tasks.length / 8) * 32}rem`,
                }}
                id="TaskList"
            >
                {tasks.map((task, index) => (
                    <div key={index} className="w-60 mb-2">
                        <h1 className="text-red-500 font-bold font-mono text-xl truncate hover:text-clip hover:whitespace-normal">
                            {index + 1}. {task}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoWidget
