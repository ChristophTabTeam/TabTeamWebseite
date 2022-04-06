import React, { useState, useEffect } from 'react'
import '../../styles/Navigation.scss'
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb as lightBulbIconSolid, faPaperPlane as paperPlaneSolid, faPeopleGroup as peopleSolid, faCircleInfo as infoCircleSolid } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
    const [activeSection, setActiveSection] = useState("start")
    const [offsetTop, setOffsetTop] = useState()
    const [hoveredIcon, setHoveredIcon] = useState()
    const windowWidth = window.innerWidth

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
            } else if (window.scrollY <= (height * 5 - 200)) {
                setActiveSection('footer')
            }
            else {
                setActiveSection()
            }
        }
    }

    useEffect(() => {
        setHoveredIcon('')
    }, [activeSection])

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
                        onMouseEnter={() => {
                            setHoveredIcon('start')
                        }}
                        onMouseLeave={() => {
                            setHoveredIcon('')
                        }}
                    >
                        <li className='nav__icon-subcontainer'>
                            {(activeSection === 'start') ? <div className='tabteam-icon'/> : <div className={(hoveredIcon === 'start') ? 'tabteam-icon' : 'tabteam-outlineicon'}/> }
                            <span className={(activeSection === 'start') ? 'nav__section-name active' : 'nav__section-name'}>Home</span>
                            {(windowWidth < 768) ? '' : <span className={(hoveredIcon === 'start') ? 'nav__section-name hovered' : 'nav__section-name'}>{(activeSection === 'start') ? '' : 'Home'}</span>}
                        </li>
                    </Link>
                    <Link
                        to='services'
                        smooth={true}
                        duration={300}
                        onMouseEnter={() => {
                            setHoveredIcon('services')
                        }}
                        onMouseLeave={() => {
                            setHoveredIcon('')
                        }}
                    >
                        <li className='nav__icon-subcontainer'>
                            {(activeSection === 'services') ? <FontAwesomeIcon icon={lightBulbIconSolid} className='nav__icon'/> : <FontAwesomeIcon icon={lightBulbIconSolid} className='nav__icon-stroke'/>}
                            <span className={(activeSection === 'services') ? 'nav__section-name active' : 'nav__section-name'}>Services</span>
                            <span className={(hoveredIcon === 'services') ? 'nav__section-name hovered' : 'nav__section-name'}>{(activeSection === 'services') ? '' : 'Services'}</span>
                        </li>
                    </Link>
                    <Link 
                        to='team'
                        smooth={true}
                        duration={300}
                        onMouseEnter={() => {
                            setHoveredIcon('team')
                        }}
                        onMouseLeave={() => {
                            setHoveredIcon('')
                        }}
                    >
                        <li className='nav__icon-subcontainer'>
                            {(activeSection === 'team') ? <FontAwesomeIcon icon={peopleSolid} className='nav__icon'/> : <FontAwesomeIcon icon={peopleSolid} className='nav__icon-stroke'/>}
                            <span className={(activeSection === 'team') ? 'nav__section-name active' : 'nav__section-name'}>Team</span>
                            <span className={(hoveredIcon === 'team') ? 'nav__section-name hovered' : 'nav__section-name'}>{(activeSection === 'team') ? '' : 'Team'}</span>
                        </li>
                    </Link>
                    <Link
                        to='contact'
                        smooth={true}
                        duration={300}
                        onMouseEnter={() => {
                            setHoveredIcon('contact')
                        }}
                        onMouseLeave={() => {
                            setHoveredIcon('')
                        }}
                    >
                        <li className='nav__icon-subcontainer'>
                            {(activeSection === 'contact') ? <FontAwesomeIcon icon={paperPlaneSolid} className='nav__icon'/> : <FontAwesomeIcon icon={paperPlaneSolid} className='nav__icon-stroke'/>}
                            <span className={(activeSection === 'contact') ? 'nav__section-name active' : 'nav__section-name'}>Kontakt</span>
                            <span className={(hoveredIcon === 'contact') ? 'nav__section-name hovered' : 'nav__section-name'}>{(activeSection === 'contact') ? '' : 'Kontakt'}</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
        
        <Link 
          to='footer'
          smooth={true}
          duration={300}
        >
          <div className='go-bottom-button'>
            <FontAwesomeIcon icon={infoCircleSolid} className={(activeSection === 'footer') ? 'go-bottom-icon active' : 'go-bottom-icon'}/>
          </div>
        </Link>
        </>
    )
}

export default Navigation