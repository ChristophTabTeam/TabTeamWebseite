import React, { useState, useEffect } from 'react'
import '../../styles/Navigation.scss'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import PeopleIcon from '@mui/icons-material/People';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import TheatersIcon from '@mui/icons-material/Theaters';
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';
import SendIcon from '@mui/icons-material/Send';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb as lightBulbIconSolid, faPaperPlane as paperPlaneSolid } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb as lightBulbIconRegular, faPaperPlane as paperPlaneRegular } from '@fortawesome/free-regular-svg-icons'

function Navigation() {
    const [activeSection, setActiveSection] = useState("start")
    const [offsetTop, setOffsetTop] = useState()

    function ActiveSection() {
        const height = window.innerHeight
        if (window.innerWidth < 768) {
            if (window.scrollY <= height - 100) {
                setActiveSection('start')
            } else if (window.scrollY <= (height * 3 - 100)) {
                setActiveSection('services')
            } else if (window.scrollY <= (height * 4 - 100)) {
                setActiveSection('team')
            } else if (window.scrollY <= (height * 5 - 100)) {
                setActiveSection('contact')
            } else {
                setActiveSection()
            }
        } else {
            if (window.scrollY <= height - 100) {
                setActiveSection('start')
            } else if (window.scrollY <= (height * 2 - 100)) {
                setActiveSection('services')
            } else if (window.scrollY <= (height * 3 - 100)) {
                setActiveSection('team')
            } else if (window.scrollY <= (height * 4 - 200)) {
                setActiveSection('contact')
            } else {
                setActiveSection()
            }
        }
    }

    

    function RenderTabTeamIcon() {
        if (activeSection === 'start') {
            return <TabTeamIcon/>
        } else {
            return <TabTeamOutlineIcon/>
        }
    }

    function RenderServicesIcon() {
        if (activeSection === 'services') {
            return <FontAwesomeIcon icon={lightBulbIconSolid} className='nav__icon'/>
        } else {
            return <FontAwesomeIcon icon={lightBulbIconRegular} className='nav__icon'/>
        }
    }

    function RenderShowroomIcon() {
        if (activeSection === 'showroom') {
            return <ShowroomIconSizing/>
        } else {
            return <ShowroomOutlinedIconSizing/>
        }
    }

    function RenderTeamIcon() {
        if (activeSection === 'team') {
            return <TeamIconSizing/>
        } else {
            return <TeamOutlinedSizing/>
        }
    }

    function RenderContactIcon() {
        if (activeSection === 'contact') {
            return <FontAwesomeIcon icon={paperPlaneSolid} className='nav__icon'/>
        } else {
            return <FontAwesomeIcon icon={paperPlaneRegular} className='nav__icon'/>
        }
    }

    useEffect(() =>{
        ActiveSection()
    }, [])

    useEffect(() => {
        ActiveSection()
    }, [offsetTop])

    useEffect(() => {
        function getTopOffset() {
            const offsetFromTop = window.scrollY
            setOffsetTop(offsetFromTop)
        } 
        window.addEventListener('scroll', getTopOffset)
        return () => window.removeEventListener('scroll', getTopOffset)
    }, [offsetTop])

    return (
        <>
            <nav className="Navigation">
                <div className='nav__wrapper'>
                    <ul className="nav__container">
                        <Link 
                            to='start'
                            smooth={true}
                            duration={300}
                        >
                            <li className='nav__icon-subcontainer'>
                                <RenderTabTeamIcon/>
                                <span className={(activeSection === 'start') ? 'nav__section-name active' : 'nav__section-name'}>Home</span>
                            </li>
                        </Link>
                        <Link 
                            to='services'
                            smooth={true}
                            duration={300}
                        >
                            <li className='nav__icon-subcontainer'>
                                <RenderServicesIcon/>
                                <span className={(activeSection === 'services') ? 'nav__section-name active' : 'nav__section-name'}>Services</span>
                            </li>
                        </Link>
                        <Link 
                            to='team'
                            smooth={true}
                            duration={300}
                        >
                            <li className='nav__icon-subcontainer'>
                                <RenderTeamIcon/>
                                <span className={(activeSection === 'team') ? 'nav__section-name active' : 'nav__section-name'}>Team</span>
                            </li>
                        </Link>
                        <Link 
                            to='contact'
                            smooth={true}
                            duration={300}
                        >
                            <li className='nav__icon-subcontainer'>
                                <RenderContactIcon/>
                                <span className={(activeSection === 'contact') ? 'nav__section-name active' : 'nav__section-name'}>Kontakt</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation

const TabTeamOutlineIcon = () => {
    return (
        <>
            <div className='tabteam-outlineicon'/>
        </>
    )
}

const TabTeamIcon = () => {
    return (
        <>
            <div className='tabteam-icon'/>
        </>
    )
}

function LightbulbSizing() {
    const width = window.innerWidth
    if (width <= 300) {
        return <LightbulbIcon sx={{ fontSize: 30}}/>
    } else if (width <= 500) {
        return <LightbulbIcon sx={{ fontSize: 35}}/>
    } else {
        return <LightbulbIcon sx={{ fontSize: 40}}/>
    }
}

function LightbulbOutlinedSizing() {
    const width = window.innerWidth
    if (width <= 300) {
        return <LightbulbOutlinedIcon sx={{ fontSize: 30}}/>
    } else if (width <= 500) {
        return <LightbulbOutlinedIcon sx={{ fontSize: 35}}/>
    } else {
        return <LightbulbOutlinedIcon sx={{ fontSize: 40}}/>
    }
}

function ShowroomIconSizing() {
    const width = window.innerWidth
    if (width <= 300) {
        return <TheatersIcon sx={{ fontSize: 30}}/>
    } else if (width <= 500) {
        return <TheatersIcon sx={{ fontSize: 35}}/>
    } else {
        return <TheatersIcon sx={{ fontSize: 40}}/>
    }
}

function ShowroomOutlinedIconSizing() {
    const width = window.innerWidth
    if (width <= 300) {
        return <TheatersOutlinedIcon sx={{ fontSize: 30}}/>
    } else if (width <= 500) {
        return <TheatersOutlinedIcon sx={{ fontSize: 35}}/>
    } else {
        return <TheatersOutlinedIcon sx={{ fontSize: 40}}/>
    }
}

function TeamIconSizing() {
    const width = window.innerWidth
    if (width <= 300) {
        return <PeopleIcon sx={{ fontSize: 30}}/>
    } else if (width <= 500) {
        return <PeopleIcon sx={{ fontSize: 35}}/>
    } else {
        return <PeopleIcon sx={{ fontSize: 40}}/>
    }
}

function TeamOutlinedSizing() {
    const width = window.innerWidth
    if (width <= 300) {
        return <PeopleAltOutlinedIcon sx={{ fontSize: 30}}/>
    } else if (width <= 500) {
        return <PeopleAltOutlinedIcon sx={{ fontSize: 35}}/>
    } else {
        return <PeopleAltOutlinedIcon sx={{ fontSize: 40}}/>
    }
}

function ContactSizing() {
    const width = window.innerWidth
    if (width <= 300) {
        return <SendIcon sx={{ fontSize: 30}}/>
    } else if (width <= 500) {
        return <SendIcon sx={{ fontSize: 35}}/>
    } else {
        return <SendIcon sx={{ fontSize: 40}}/>
    }
}

function ContactOutlinedSizing() {
    const width = window.innerWidth
    if (width <= 300) {
        return <SendOutlinedIcon sx={{ fontSize: 30}}/>
    } else if (width <= 500) {
        return <SendOutlinedIcon sx={{ fontSize: 35}}/>
    } else {
        return <SendOutlinedIcon sx={{ fontSize: 40}}/>
    }
}