import React, { useState } from 'react'
import '../../styles/Services.scss'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameCurved, faDesktop, faHashtag, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-scroll";

function Services() {
    const [renderContent, setRenderContent] = useState('branding')

    function RenderContent() {
        if (renderContent === 'branding') {
            return <BrandingContent/>
        } else if (renderContent === 'webdesign') {
            return <WebdesignContent/>
        } else if (renderContent === 'socialmedia') {
            return <SocialMediaContent/>
        } else {
            return null
        }
    }

    function RenderBackground() {
        if (renderContent === 'branding') {
            return <FontAwesomeIcon icon={faFireFlameCurved} className='services__icon services__flame service__background-icon'/>
        } else if (renderContent === 'webdesign') {
            return <FontAwesomeIcon icon={faDesktop} className='services__icon services__desktop service__background-icon'/>
        } else if (renderContent === 'socialmedia') {
            return <FontAwesomeIcon icon={faHashtag} className='services__icon services__tag service__background-icon'/>
        } else {
            return null
        }
    }

    return (
            <div className='Services' id='services' >
                <div className='services__grid'>
                    <div className='services__first'>
                        <div className='services__flame-container'>
                            <RenderBackground/>
                        </div>
                        <div className='services__first-content'>
                            <div className='services__indicator-container'>
                                <div className='services__indicator-subcontainer'>
                                    <div className={(renderContent === 'branding') ? 'indicator active' : 'indicator'}/>
                                    <div className={(renderContent === 'webdesign') ? 'indicator active' : 'indicator'}/>
                                    <div className={(renderContent === 'socialmedia') ? 'indicator active' : 'indicator'}/>
                                </div>
                            </div>
                            <div className='services__content-container'>
                                <RenderContent/>
                            </div>
                        </div>
                    </div>
                    <div className='services__second'>
                        <div className='services__second-wrapper'>
                            <div className='services__services-container'>
                                <div className='services__service' onMouseEnter={() => {
                                    setRenderContent('branding')
                                }} onClick={() => {
                                    setRenderContent('branding')
                                }}>
                                    <div className='services__service-icon'>
                                        <FontAwesomeIcon icon={faFireFlameCurved} className={(renderContent === 'branding') ? 'services__icon' : 'services__icon-stroke'}/>
                                    </div>
                                    <div className='services__service-text-number-container'>
                                        <div className='services__service-name-container'>
                                            <span className={(renderContent === 'branding') ? 'services__service-name active' : 'services__service-name'}>Branding</span>
                                        </div>
                                        <span className='services__number'>5<span className='highlighted'>+</span></span>
                                    </div>
                                </div>
                                <DoubleArrowIcon sx={{ fontSize: 30 }}/>
                                <div className='services__service' onMouseEnter={() => {
                                    setRenderContent('webdesign')
                                }} onClick={() => {
                                    setRenderContent('webdesign')
                                }}>
                                    <div className='services__service-icon'>
                                        <FontAwesomeIcon icon={faDesktop} className={(renderContent === 'webdesign') ? 'services__icon' : 'services__icon-stroke'}/>
                                    </div>
                                    <div className='services__service-text-number-container'>
                                        <div className='services__service-name-container'>
                                            <span className={(renderContent === 'webdesign') ? 'services__service-name active' : 'services__service-name'}>Webdesign</span>
                                        </div>
                                        <span className='services__number'>10<span className='highlighted'>+</span></span>
                                    </div>
                                </div>
                                <DoubleArrowIcon sx={{ fontSize: 30 }}/>
                                <div className='services__service' onMouseEnter={() => {
                                    setRenderContent('socialmedia')
                                }} onClick={() => {
                                    setRenderContent('socialmedia')
                                }}>
                                    <div className='services__service-icon'>
                                        <FontAwesomeIcon icon={faHashtag} className={(renderContent === 'socialmedia') ? 'services__icon' : 'services__icon-stroke'}/>
                                    </div>
                                    <div className='services__service-text-number-container'>
                                        <div className='services__service-name-container'>
                                            <span className={(renderContent === 'socialmedia') ? 'services__service-name active' : 'services__service-name'}>Social Media</span>
                                        </div>
                                        <span className='services__number'>12<span className='highlighted'>+</span></span>
                                    </div>
                                </div>
                            </div>
                            <div className='services__services-text'>
                                <p>Realisierte <span className='green'>Ideen</span><br/>mit erfolgreicher <span className='green'>Kundenzufriedenheit</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='services__third'>
                        <div className='textContainer'>
                            <h2><span className="green"><span data-aos="fade-up" data-aos-delay="50" data-aos-once="true">Der</span><span data-aos="fade-up" data-aos-delay="300" data-aos-once="true"> Draht</span><span data-aos="fade-up" data-aos-delay="500" data-aos-once="true"> glüht</span> </span><span data-aos="fade-up" data-aos-delay="750" data-aos-once="true"> auf</span></h2>
                            <h1><span data-aos="fade-up" data-aos-delay="1000" data-aos-once="true">treibt </span><span className="green"><span data-aos="fade-up" data-aos-delay="1200" data-aos-once="true">die </span><span data-aos="fade-up" data-aos-delay="1400" data-aos-once="true">Energie </span><span data-aos="fade-up" data-aos-delay="1600" data-aos-once="true">an</span></span><span data-aos="fade-up" data-aos-delay="1800" data-aos-once="true">.</span></h1>
                            <p data-aos="fade-up" data-aos-delay="2000" data-aos-once="true">
                                Ab jetzt trifft deine Idee auf unser Leistungsspektrum. <br/>Für deine Idee geben wir alles.
                                Workflow ist uns wichtig. Regelmäßige Updates sind für dich ein Muss und eine <br/>"Live-View"
                                bekommst du jederzeit auf Wunsch.
                            </p>
                            <p data-aos="fade-up" data-aos-delay="2200" data-aos-once="true">
                                TabTeam arbeitet <span className="green uppercase">konsequent</span> und <span className="green uppercase">remote</span>.
                            </p>
                        </div>
                        <div className='services__to-contact-wrapper'>
                            <Link to='contact' smooth={true} duration={300} className='to-contact-link'>
                                <div className='services__to-contact-container'>
                                    <span>Performance für deinen Tab</span>
                                    <div className='services__send-icon'>
                                        <FontAwesomeIcon icon={faPaperPlane} className='services__paper-plane'/>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>  
                </div>
            </div>
    )
}

export default Services

const BrandingContent = () => {
    return (
        <div className='services__textcontentcontainer'>
            <p>Wir erarbeiten dein Branding. Zusammen Konzeptionieren wir dir ein individuelles Logo. Daraus erfolgt dein Farbschema und wir verfassen deine Corporate Identity.</p>
            <p>Es folgen deine Printmedien von Visitenkarte bis hin zum persönlichen Flyer. Wir erstellen dir Printmedien und digitale Medien mit denen du werben kannst. </p>
            <p>Deine Marke wird individuell und einzigartig. Deine Motivation zündet zu einer Marketing Flamme die mit uns nicht ausgeht.</p>
        </div>
    )
}

const WebdesignContent = () => {
    return (
        <div className='services__textcontentcontainer'>
            <p>Deine Website in unserem Tab Stil. Nach deinen Vorstellungen und mit deinen Inhalten, erstellen wir dir eine personalisierte Website.</p>
            <p>Mit unserer Website für dich, bist du im Trend, ein erfolgreicher Suchtreffer und deine Userexpiernce wird eine Wohltat für den Kunden.</p>
            <p>Deine Website wird einladend, begeistern und resonancen erzielen. Ab jetzt öffnet jeder gerne deinen Tab.</p>
        </div>
    )
}

const SocialMediaContent = () => {
    return (
        <div className='services__textcontentcontainer'>
            <p>TabTeam wird für dich zum TagTeam. Wir sehen ab jetzt deine Tags und deinen Kanal, wie unseren als Alleinstellungsmerkmal.</p>
            <p>Wir passen deine Tags und deinen Algorithmus auf deine Zielgruppe an.</p>
            <p>Dein Unternehmen wird zum Influencer. Ihr werdet medial aktiv sein und klare Konzepte bekommen. Die junge Zielgruppe wird zu eurer Community.</p>
        </div>
    )
}