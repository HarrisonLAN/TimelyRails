
import Link from 'next/link';
import Image from 'next/image'
export default function navbar() {
    
    return (
        <nav className=" bg-white border-b border-mainColour font-mono">
            <div className="max-w-screen-xl flex flex-wrap p-4">
                <a href="#" className="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Adelaide_Train_Logo.png" className="h-12 mr-5" alt="Timely Rails" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Timely Rails</span>
                </a>
            </div>
        </nav>

    )
}