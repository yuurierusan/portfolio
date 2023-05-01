import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'
import { useState, useEffect } from 'react'

const Landing = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const textArray = [" Hi!, I'm Jonshea Nutson "]
    const textArray2 = [' A Software Engineer based in Texas ']
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((currentIndex) => currentIndex + 1)
        }, 100) // change the interval time as per your requirement
        return () => clearInterval(intervalId)
    }, [])

    const currentText = textArray.slice(0, currentIndex + 1).join('')
    const currentText2 = textArray2.slice(0, currentIndex + 1).join('')
    return (
        <div className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <div className='mx-auto max-w-3xl text-center'>
                        <h1 className='typewriter bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-md font-extrabold text-transparent '>
                            {currentText}
                        </h1>
                        <p className='typewriter mx-auto mt-4 max-w-xl text-sm text-white'>
                            {currentText2}
                        </p>
                        <div className='mt-8 flex flex-wrap justify-center gap-4'></div>
                    </div>
                    <div className='flex justify-center'>
                        <Link
                            to='projects'
                            smooth
                            duration={500}
                            className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 cursor-pointer'>
                            Projects
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight
                                    size={25}
                                    className='ml-1'
                                />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
