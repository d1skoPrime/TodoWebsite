import React from 'react'

interface Props {
    children: React.ReactNode
    onClick?: any
}

const MyButton = (props: Props) => {
    return (
        <button
            className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300 hover:text-gray-300"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default MyButton
