import React, { useState } from 'react'
import { Impressum, Agb, Datenschutz, Bewerbung, Media, Jobs, AgbChapters, DatenschutzChapter } from './chapters/index'
import '../../styles/Footer.scss'

function Footer() {
    const [content, setContent] = useState('jobs')

    function RenderContent() {
        if (content === 'media') {
            return <Media/>
        } else if (content === 'jobs') {
            return <Jobs/>
        } else if (content === 'bewerbung') {
            return <Bewerbung/>
        } else if (content === 'agb') {
            return <Agb/>
        } else if (content === 'datenschutz') {
            return <Datenschutz/>
        } else if (content === 'impressum') {
            return <Impressum/>
        } else {
            return null
        }
    }

    function RenderChapters() {
        if (content === 'agb') {
            return <AgbChapters/>
        } else if (content === 'datenschutz') {
            return <DatenschutzChapter/>
        } else {
            return null
        }
    }

    return (
        <footer className='Footer' id='footer'>
            <div className='footer__first'>
                <div className='footer__left-wrapper'>
                    <div className='textContainer'>
                        <h2><span className='green'>Rechtlich</span> sicher</h2>
                        <h1>mit <span className='green'>Datenschutz</span>.</h1>
                        <p>Alle unsere Cookie Richtlinien und Geschäftsdaten auf einen Blick. DSGVO ist uns wichtig.</p>
                        <p>TabTeam arbeitet <span className='green'>SCHÜTZEND</span> und <span className='green'>SICHER</span>.</p>
                    </div>
                </div>
                <div className='footer__list-container'>
                    <div className='footer__lists-wrapper'>
                        <ul className='footer__list'>
                            <li className='footer__list-item' onClick={() => {
                                setContent('agb')
                            }}>
                                <span className={(content === 'agb') ? 'footer__list-item-name uppercase active' : 'footer__list-item-name uppercase'}>AGB</span>
                            </li>
                            <li className='footer__list-item' onClick={() => {
                                setContent('jobs')
                            }}>
                                <span className={(content === 'jobs') ? 'footer__list-item-name uppercase active' : 'footer__list-item-name uppercase'}>Jobs</span>
                            </li>
                            <li className='footer__list-item' onClick={() => {
                                setContent('media')
                            }}>
                                <span className={(content === 'media') ? 'footer__list-item-name uppercase active' : 'footer__list-item-name uppercase'}>Media</span>
                            </li>
                            <li className='footer__list-item' onClick={() => {
                                setContent('impressum')
                            }}>
                                <span className={(content === 'impressum') ? 'footer__list-item-name uppercase active' : 'footer__list-item-name uppercase'}>Impressum</span>
                            </li>
                            <li className='footer__list-item' onClick={() => {
                                setContent('bewerbung')
                            }}>
                                <span className={(content === 'bewerbung') ? 'footer__list-item-name uppercase active' : 'footer__list-item-name uppercase'}>Bewerbung</span>
                            </li>
                            <li className='footer__list-item' onClick={() => {
                                setContent('datenschutz')
                            }}>
                                <span className={(content === 'datenschutz') ? 'footer__list-item-name uppercase active' : 'footer__list-item-name uppercase'}>Datenschutz</span>
                            </li>
                        </ul>
                        <RenderChapters/>
                    </div>
                </div>
            </div>
            <div className='footer__second'>
                <div className='footer__content-wrapper'>
                    <RenderContent/>
                </div>
            </div>
        </footer>
    )
}

export default Footer