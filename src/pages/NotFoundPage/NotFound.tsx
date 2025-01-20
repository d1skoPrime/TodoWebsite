import MyButton from '../components/UI/Buttons/MyButton'

interface Props {}

export default function NotFound({}: Props) {
    const HandleButton = () => {
        window.open('/', '_blank')
    }
    return (
        <div className="bg-gray-900 flex min-h-screen flex-col justify-center items-center">
            <strong className="text-red-500 text-2xl pt-2">ERROR 404. NOT FOUND</strong>
            <div className="container flex justify-center items-center flex-col h-screen">
                <h1 className="text-gray-500 text-3xl mb-16">
                    Sorry, We cannot find this page, check URL!
                </h1>
                <div className="flex justify-center items-center text-center w-full">
                    <MyButton onClick={HandleButton}>GO BACK</MyButton>
                </div>
            </div>
        </div>
    )
}
