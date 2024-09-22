import About from "./About"
import Contact from "./Contact"
import Footer from "./Footer"
import Resume from "./Resume"
import Projects from "./Projects"
import Intro from "./Intro"
import Nav from "./Nav"

export default function Home() {
    return (
        <div className='bg-black'>
            <Nav />
            <Intro id="intro"/>
            <About id="about"/>
            <Projects id="projects"/>
            <Contact id="contact"/>
            <Resume id="resume"/>
            <Footer/>
        </div>

    )
}