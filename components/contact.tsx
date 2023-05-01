const Contact = () => {
    return (
        <div
            name='contact'
            className='w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col justify-center h-full'>
                <div className='pb-8'>
                    <p className='text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500'>
                        Contact
                    </p>
                    <p className='py-4 md:py-6'>
                        Submit the form below to get in touch with me
                    </p>
                </div>

                <form
                    action='https://getform.io/f/8f70ef78-040c-4924-bd73-5bf7c5add1c9'
                    method='POST'
                    className='flex flex-col'>
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter your name'
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-2'
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='Enter your email'
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-2'
                    />
                    <textarea
                        name='message'
                        placeholder='Enter your message'
                        rows={5}
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-2'></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-4 md:my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                        Let's chat
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
