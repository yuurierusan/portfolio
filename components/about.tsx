import { HtmlAttributes } from 'react'

interface DivProps extends HtmlAttributes<HTMLDivElement> {
    name: string
}

const About = () => {
    return (
        <div
            name='about'
            className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-center'>
                    <p className='text-3xl font-bold inline border-b-4 border-gray-500'>
                        Get To Know Me
                    </p>
                </div>

                <p className='text-md mt-20 text-center'>
                    Hey there! I'm a versatile content creator who thrives in
                    fast-paced, deadline-driven environments. I'm a people
                    person with strong communication skills, and I love working
                    with teams to coordinate production. When it comes to
                    traditional and digital audio and video production, I'm your
                    go-to guy! I'm skilled in using Adobe CC, Microsoft Office,
                    FCP X, Da-Vinci Resolve, and handling cameras & lights. I'm
                    also a tech-savvy individual who is comfortable working with
                    different computer environments such as Windows, Macintosh,
                    and Linux.
                </p>

                <br />

                <p className='text-md text-center'>
                    In addition to creating content, I'm actively expanding my
                    knowledge in software development. I'm currently learning
                    JavaScript, Python, React, Flask, and Node through
                    expert-led instruction. Learning new technologies hands-on
                    is my jam! And when I'm not creating content or coding, you
                    can find me producing music or playing games - I Let's
                    connect and explore our creative passions together!
                </p>
            </div>
        </div>
    )
}

export default About
