import React, { useState } from 'react'
import { Impressum, Agb, Datenschutz, Bewerbung, Media, Jobs, AgbChapters, DatenschutzChapter } from './chapters/index'
import '../../styles/Footer.scss'
import { AgbPhrase, BewerbungPhrase, DatenschutzPhrase, ImpressumPhrase, JobsPhrase, MediaPhrase } from './Phrases'

function Footer() {
    const [content, setContent] = useState('jobs')

    function switchToApplication() {
        setContent('bewerbung')
    }

    function RenderContent() {
        if (content === 'media') {
            return <Media/>
        } else if (content === 'jobs') {
            return <Jobs switchToApplication={switchToApplication}/>
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

    function RenderPhrase() {
        if (content === 'agb') {
            return <AgbPhrase/>
        } else if (content === 'jobs') {
            return <JobsPhrase/>
        } else if (content === 'media') {
            return <MediaPhrase/>
        } else if (content === 'impressum') {
            return <ImpressumPhrase/>
        } else if (content === 'bewerbung') {
            return <BewerbungPhrase/>
        } else if (content === 'datenschutz') {
            return <DatenschutzPhrase/>
        }
        else {
            return null
        }
    }

    return (
        <footer className='Footer' id='footer'>
            <div className='footer__first'>
                <div className='footer__left-wrapper'>
                    <RenderPhrase/>
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