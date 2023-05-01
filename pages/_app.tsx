import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import GetToKnowMe from '../components/about'
import Contact from '../components/contact'
import Experience from '../components/experience'
import Landing from '../components/landing'
import Nav from '../components/nav'
import Projects from '../components/project'
import SocialLinks from '../components/social'
import { Analytics } from '@vercel/analytics/react'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <div>
            <Component {...pageProps} />
            <Analytics />
            <Nav />
            <div>
                <Landing />
            </div>
            <div>
                <GetToKnowMe />
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <Experience />
            </div>
            <div>
                <Contact />
            </div>
            <div>
                <SocialLinks />
            </div>
        </div>
    )
}
export default App
