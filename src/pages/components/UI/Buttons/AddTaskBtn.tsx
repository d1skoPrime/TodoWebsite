interface Props {
    children: React.ReactNode
    OnClick?: any
    onChange?: any
}

const AddTaskBtn = (props: Props) => {
    return (
        <button
            className="w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-1 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300 hover:text-gray-300"
            onClick={props.OnClick}
        >
            {props.children}
        </button>
    )
}

export default AddTaskBtn
