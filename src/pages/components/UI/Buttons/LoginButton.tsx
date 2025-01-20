

interface Props  {
	children: React.ReactNode
	type?: 'button' | 'submit' | 'reset'
}

const LoginButton = (props: Props) => {
	return (
		<button className='w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300' type={props.type || 'button'}>{props.children}</button>
	)
}

export default LoginButton