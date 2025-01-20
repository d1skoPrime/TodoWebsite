import { useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import LoginButton from '../components/UI/Buttons/LoginButton'
interface Props {}

export default function LoginPage({}: Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Login attempted with:', { email, password })
        // Here you would typically handle the login logic
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-center text-white mb-8">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6 relative">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-purple-500 transition-all duration-300 peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="email"
                            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:px-0 peer-focus:px-0  peer-focus:bg-gray-800 peer-focus:text-lg peer-focus:align-top peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:left-2"
                        >
                            Email
                        </label>
                        <FaEnvelope className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <div className="mb-6 relative">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full bg-gray-700 text-white border-2 border-gray-600 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-purple-500 transition-all duration-300 peer"
                            placeholder=" "
                        />
                        <label
                            htmlFor="password"
                            className="absolute text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-placeholder-shown:px-0 peer-focus:px-0  peer-focus:bg-gray-800 peer-focus:text-lg peer-focus:align-top peer-focus:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:left-2"
                        >
                            Password
                        </label>
                        <FaLock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <LoginButton type="submit">Log In</LoginButton>
                    <div className="flex justify-center py-2 text-white">
                        Don't have an account yet?{' '}
                        <a href="/signup" className="cursor-pointer text-blue-600 ml-2">
                            Sign Up!
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}
