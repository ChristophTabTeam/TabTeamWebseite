import React, {useEffect, useState} from 'react'
import Aos from 'aos'
import '../../styles/Start.scss'

function Start() {
    const [socials, setSocials] = useState()
    const width = window.innerWidth

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div className='Start' id='start'>
            <div className='logo-container'>
                <div className='logo'/>
            </div>
            <div className='start__socials'>
                <ul className='start__socials-wrapper'>
                    <a href='https://facebook.com/tabteam'>
                        <li className={(socials === 'facebook') ? 'start__socials-icon facebook active' : 'start__socials-icon facebook'} 
                            onMouseEnter={() => {
                                setSocials('facebook')  
                            }}
                            onMouseLeave={() => {
                                setSocials()
                            }}
                        >
                        </li>
                    </a>
                    <a href='https://instagram.com/tabteam'>
                        <li className={(socials === 'instagram') ? 'start__socials-icon instagram active' : 'start__socials-icon instagram'}
                            onMouseEnter={() => {
                                setSocials('instagram')  
                            }}
                            onMouseLeave={() => {
                                setSocials()
                            }}
                        >
                        </li>
                    </a>                    
                    <a href='https://linkedin.com/tabteam'>
                        <li className={(socials === 'linked-in') ? 'start__socials-icon linkedin active' : 'start__socials-icon linkedin'}
                            onMouseEnter={() => {
                                setSocials('linked-in')  
                            }}
                            onMouseLeave={() => {
                                setSocials()
                            }}
                        >
                        </li>
                    </a>    
                    <a href='https://discord.gg/fjEr2bG337'>
                        <li className={(socials === 'discord') ? 'start__socials-icon discord active' : 'start__socials-icon discord'}
                            onMouseEnter={() => {
                                setSocials('discord')  
                            }}
                            onMouseLeave={() => {
                                setSocials()
                            }}
                        >
                        </li>
                    </a>  
                </ul>
            </div>
            <div className='start__grid'>
                <div className='start__first'>
                    {(width < 1440) ? '' : <div className="start__monitor"/>}
                </div>
                <div className='start__second'>
                    <div className='textContainer'>  
                        <h2><span className='green'><span data-aos="fade-up" data-aos-delay="100" data-aos-once="true">Deine </span><span data-aos="fade-up" data-aos-delay="300" data-aos-once="true">Ideen</span></span><span data-aos="fade-up" data-aos-delay="500" data-aos-once="true"> setzen</span></h2>
                        <h1><span data-aos="fade-up" data-aos-delay="700" data-aos-once="true">wir </span><span data-aos="fade-up" data-aos-delay="900" data-aos-once="true">uns </span><span className='green'><span data-aos="fade-up" data-aos-delay="1100" data-aos-once="true">als </span><span data-aos="fade-up" data-aos-delay="1300" data-aos-once="true">Maßstab</span></span></h1>
                        <p>Deine Website soll nicht nur Statistik und Preiskalkulation sein.
                        Wir nehmen deine Motivation auf. Niveau und Wünsche werden auf
                        deine Kunden abgestimmt. Sei ein direktes Suchergebnis.</p>
                        <p>TabTeam deine <span className='green'>WEBAGENTUR</span> mit <span className='green'>IDEALISMUS</span>.</p>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Start