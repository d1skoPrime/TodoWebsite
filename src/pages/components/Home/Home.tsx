import TodoWidget from '../UI/Widgets/todoWidget'
interface Props {}

export default function Home({}: Props) {
    return (
        <div className="bg-gray-400 flex min-h-screen justify-center items-center flex-col">
            <h1 className="text-purple-600 font-mono font-bold text-2xl mb-10">
                TODO LIST - By d1skoPrime
            </h1>
            <div className="container flex">
                <TodoWidget />
            </div>
        </div>
    )
}
