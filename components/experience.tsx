import Image from 'next/image'
const Experience = () => {
    type Technology = {
        id: number
        src: string
        title: string
        style: string
    }

    const techs: Technology[] = [
        {
            id: 1,
            src: 'https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png',
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: 'https://assets.stickpng.com/thumbs/5847f265cef1014c0b5e4868.png',
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: 'https://assets.stickpng.com/thumbs/584830f5cef1014c0b5e4aa1.png',
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id: 5,
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
            title: 'Tailwind',
            style: 'shadow-sky-400',
        },
        {
            id: 8,
            src: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
            title: 'GitHub',
            style: 'shadow-gray-400',
        },
        {
            id: 9,
            src: 'https://seeklogo.com/images/A/aws-amplify-logo-D68DDB5AB1-seeklogo.com.png',
            title: 'Amplify',
            style: 'shadow-orange-500',
        },
        {
            id: 10,
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/2048px-Bash_Logo_Colored.svg.png',
            title: 'Bash',
            style: 'shadow-gray-500',
        },
        {
            id: 11,
            src: 'https://www.brainspire.com/hubfs/asp.net-logo.png',
            title: '.NET',
            style: 'shadow-blue-500',
        },
    ]

    return (
        <div className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white text-center'>
                <div>
                    <p className='text-3xl font-bold border-b-4 border-gray-500 p-2 inline'>
                        Experience
                    </p>
                    <p className='py-6'>
                        These are the technologies I&apos;ve worked with
                    </p>
                </div>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-center py-4 md:py-8 px-4 md:px-12'>
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <Image
                                src={src}
                                alt=''
                                className='w-16 md:w-20 mx-auto'
                            />
                            <p className='mt-2 md:mt-4 text-sm md:text-base'>
                                {title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
