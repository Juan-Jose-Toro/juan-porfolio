import { useState } from 'react'
import Hero from './components/Hero'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { default as dataWorkExperience } from './data/workExperienceData.jsx'
import { 
    PiGithubLogoDuotone as GithubLogo,
    PiLinkedinLogoDuotone as LinkedInLogo,
    PiMailboxDuotone as EmailLogo
    
} from "react-icons/pi";

function App() {
    const [count, setCount] = useState(0)
    
    const aboutContent = `Hi I'm Juan! I love building and solving problems 🧱
    
    I'm currently pursuing a Master of Science in Computer Science at University of Colorado Boulder. I also graduated from the University of Waterloo from Computational Mathematics, Statistics and a minor in Combinatorics and Optimization.

    I have experience across full stack web development, data science and AI. I have contributed to production applications across MERN + Azure tech stacks delivering impactful interfaces, efficient APIs and clean data pipelines. With a team at UWaterloo we also implemented machine learning papers like "A robust EM clustering algorithm for Gaussian mixture models" which you can find in my github.

    I personally enjoy doing competitive programming, coding for the web, reading and playing guitar!
    `
    
    const renderedWorkExperience = dataWorkExperience.map((item, i) => {
        return (
            <div key={i} className="job__container">
                <div>
                    <h3 className="job__title">{item.title}</h3>    
                    <p className="job__company">{item.company}</p>
                </div>
                <p className="job__description">{item.desc}</p>
            </div>
        );
    });
    
    const dataProjects = [
        {
            title: 'Time Tracker App',
            skills: 'ReactJS, React Hooks, Redux',
            link: 'https://github.com/Juan-Jose-Toro/blog-frontend'
        },
        {
            title: 'Note Taking App',
            skills: 'Angular, Express, Vim',
            link: 'https://github.com/Juan-Jose-Toro/Tracker'
        },
        {
            title: 'EM Robust Paper Implementation',
            skills: 'Data Science',
            link: 'https://github.com/Juan-Jose-Toro/em-robust-algorithm-implementation'
        },
        {
            title: 'UDES Software Engineer Website',
            skills: 'NextJS, TypeScript',
            link: 'https://github.com/Juan-Jose-Toro/udes-se'
        }
    ]
    
    const renderedProjects =  dataProjects.map((item, i) => {
        const specialColors = {
            'Note Taking App': 'projects__item--yellow',
            'EM Robust Paper Implementation': 'projects__item--blue'
        }
        const curColor = specialColors[item.title] || '';
        return (
            <a key={i} href={item.link}>
                <div key={i} className={'projects__item ' + curColor}>
                    <h3>{item.title}</h3>
                    <p>{item.skills}</p>
                </div>
            </a>
        );
    });

    return (
        <>
            <Hero/>
            {/* About section */}
            <section id='about'>
                <h2>About</h2>
                <p className='about__content'>{aboutContent}</p>
            </section>
            {/* Work Experience section */}
            <section id='work-experience'>
                <h2>Work Experience</h2>
                {renderedWorkExperience}
            </section>
            {/* Projects section */}
            <section id='projects'>
                <h2>Projects</h2>
                <div className="projects__grid">
                    {renderedProjects}
                </div>
            </section>
            {/* Conect! */}
            <section id='connect'>
                <h2 className='connect__title' >Let's connect!</h2>
                <div className='connect__container'>
                    <a href='https://github.com/Juan-Jose-Toro' className='link__container'>
                        <GithubLogo className='logo'/>
                        <p>Github</p>
                    </a>
                    <a href='https://www.linkedin.com/in/juan-jose-toro-ch/' className='link__container'>
                        <LinkedInLogo className='logo'/>
                        <p>LinkedIn</p>
                    </a>
                    <a href='mailto:juantoro.work@gmail.com' className='link__container'>
                        <EmailLogo className='logo'/>
                        <p>Email</p>
                    </a>
                </div>
            </section>
            <p className='rights'>© 2025 Juan Toro. All Rights Reserved.</p>
        </>
    )
}

export default App

