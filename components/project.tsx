const Projects = () => {
    const projects = [
        {
            id: 1,
            name: 'Stockwise',
            src: 'https://raw.githubusercontent.com/mannyaalonso/stockwise/main/public/ss6.png',
            href: 'https://github.com/mannyaalonso/stockwise',
            href2: 'https://stockwise-fe.netlify.app/',
        },
        {
            id: 2,
            name: 'Habitat Hunter',
            src: 'https://static.vecteezy.com/system/resources/previews/003/582/701/original/coming-soon-background-illustration-template-design-free-vector.jpg',
            href: 'https://github.com/yuurierusan/Habitat-Hunter',
            href2: 'https://static.vecteezy.com/system/resources/previews/003/582/701/original/coming-soon-background-illustration-template-design-free-vector.jpg',
        },
        {
            id: 3,
            name: 'Whiteboard',
            src: 'https://raw.githubusercontent.com/yuurierusan/Whiteboard/main/HomePage.jpeg',
            href: 'https://github.com/yuurierusan/Whiteboard',
            href2: 'https://static.vecteezy.com/system/resources/previews/003/582/701/original/coming-soon-background-illustration-template-design-free-vector.jpg',
        },
        {
            id: 4,
            name: 'Top G Auto',
            src: 'https://raw.githubusercontent.com/yuurierusan/Top-G-Auto-App/main/client/public/ss2.png',
            href: 'https://github.com/yuurierusan/Top-G-Auto-App',
            href2: 'https://top-g-auto.herokuapp.com/',
        },
        {
            id: 5,
            name: 'Mine Sweeper',
            src: 'https://raw.githubusercontent.com/yuurierusan/Mine_Sweeper/main/gamepage.png',
            href: 'https://github.com/yuurierusan/Mine_Sweeper',
            href2: 'https://mine_sweeper.surge.sh/',
        },
    ]

    return (
        <div
            name='projects'
            className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-center'>
                <div className='py-8'>
                    <p className='text-3xl font-bold inline border-b-4 border-gray-500'>
                        Projects
                    </p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {projects.map(({ id, name, src, href, href2 }) => (
                        <div
                            key={id}
                            className='shadow-md shadow-gray-600 rounded-lg'>
                            <p className=' justify-center'>{name}</p>
                            <img
                                src={src}
                                alt=''
                                className='w-96 h-52 rounded-md duration-200 hover:scale-105'
                            />
                            <div className='flex items-center justify-center'>
                                <a
                                    href={href}
                                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    Code
                                </a>
                                <a
                                    href={href2}
                                    className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
