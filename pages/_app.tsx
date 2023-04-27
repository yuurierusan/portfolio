import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import About from '../components/about'
import Contact from '../components/contact'
import Experience from '../components/experience'
import Landing from '../components/landing'
import Nav from '../components/nav'
import Projects from '../components/project'
import SocialLinks from '../components/social'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Component {...pageProps} />
            <Nav />
            <div>
                <Landing />
            </div>
            <div>
                <About />
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
