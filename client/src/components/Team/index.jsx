import React, { useState } from 'react'
import '../../styles/Team.scss'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Team() {
    const [indicator, setIndicator] = useState('first')
    const width = window.innerWidth
    const [activeTeam, setActiveTeam] = useState('general')
    
    function ActiveTeam(props) {
        if (activeTeam === 'general') {
            return <GeneralEmployees class={props.class} />
        } else if (activeTeam === 'marketing') {
            return <MarketingEmployees class={props.class} />
        } else if (activeTeam === 'design') {
            return <DesignEmployees class={props.class} />
        } else if (activeTeam === 'development') {
            return <DevelopmetEmployees class={props.class} />
        } else {
            return null
        }
    }

    function EmployeeRenderedContainer() {
        if (width < 1440) {
            if(indicator === 'first') {
                return <ActiveTeam class='team__employee-container first' />
            } else if (indicator === 'second') {
                return <ActiveTeam class='team__employee-container second' />
            } else if (indicator === 'third') {
                return <ActiveTeam class='team__employee-container third' />
            } else {
                return null
            }
        } else {
            return null
        }
    }

    return (
        <div className='Team' id='team'>
            <div className='TeamGeneral'>
                <div className='team__first'>
                    <div className='textContainer'>
                        <h2><span className="green"><span data-aos="fade-up" data-aos-delay="50" data-aos-once="true">Dein Tab</span></span><span data-aos="fade-up" data-aos-delay="300" data-aos-once="true"> erstellt</span></h2>
                        <h1>von unserem <span className='green'>Team</span>.</h1>
                        <p data-aos="fade-up" data-aos-delay="2000" data-aos-once="true">
                            wir freuen uns sehr auf die Zusammenarbeit mit dir. 
                            In der Zusammenarbeit wollen wir dir das Gefühl vermitteln, 
                            dass du ein Teil des Teams bist. Zusammen mit dir wird es dein Projekt.
                        </p>
                        <p>
                            TabTeam arbeitet <span className='green uppercase'>familiär</span> und <span className='green uppercase'>kooperativ</span>.
                        </p>
                    </div>
                </div> 
                <div className='team__second'>
                    <div className='team__second-background'>
                        <div className='team__second-top-background'/>
                    </div>
                    <div className={(width < 1440) ? 'team__employee-mobile-indicator-container' : 'team__employee-mobile-indicator-container inactive'}>
                            <div className={(indicator === 'christoph') ? 'team__mobile__indicator active' : 'team__mobile__indicator'}
                                onClick={() => {
                                    setIndicator('first')
                                }}
                            />
                            <div className={(indicator === 'alex') ? 'team__mobile__indicator active' : 'team__mobile__indicator'}
                                onClick={() => {
                                    setIndicator('second')
                                }}
                            />
                            <div className={(indicator === 'sascha') ? 'team__mobile__indicator active' : 'team__mobile__indicator'}
                                onClick={() => {
                                    setIndicator('thrid')
                                }}
                            />
                    </div>
                    {(width < 1440) ? <EmployeeRenderedContainer/> : <ActiveTeam class='team__employee-container'/>}
                    <div className='team__choose-team'>
                        <div className='team__choose-team-name green' onClick={() => {
                            setActiveTeam('general')
                        }}>Gesellschafter</div>
                        <div className='team__choose-team-name green' onClick={() => {
                            setActiveTeam('marketing')
                        }}>Marketing</div>
                        <div className='team__choose-team-name green' onClick={() => {
                            setActiveTeam('design')
                        }}>Design</div>
                        <div className='team__choose-team-name green' onClick={() => {
                            setActiveTeam('development')
                        }}>Development</div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Team

function GeneralEmployees(props) {
    return (
        <div className={props.class}>
            <div className='team__employee'>
                <div className='team__employee-profilepic-container'>
                    <div className='team__employee-profilepic'/>
                </div>
                <div className='team__employee-details-container'>                
                    <p className='team__employee-name'>Christoph Labestin</p>
                    <p className='team__employee-job-title'>Geschäftsführer</p>
                    <p className='team__employee-caption italic'>"iPad Allrounder und React Hero"</p>
                </div>
            </div>
            <div className='team__employee'>
                <div className='team__employee-profilepic-container'>
                    <div className='team__employee-profilepic'/>
                </div>
                <div className='team__employee-details-container'>
                    <p className='team__employee-name'>Alexander Diermeyer</p>
                    <p className='team__employee-job-title'>Creative</p>
                    <p className='team__employee-caption italic'>"Whiteboard Beschmierer und Photoshop Crack"</p>
                </div>
            </div>
            <div className='team__employee'>
                <div className='team__employee-profilepic-container'>
                    <div className='team__employee-profilepic'/>
                </div>
                <div className='team__employee-details-container'>
                    <p className='team__employee-name'>Sascha Frank</p>
                    <p className='team__employee-job-title'>IT Consultant</p>
                    <p className='team__employee-caption italic'>"Back End Beschwörer und NAS Liebhaber"</p>
                </div>
            </div>
        </div>
    )
}

const MarketingEmployees = (props) => {
    return (
        <div className={props.class}>
            <div className='team__employee'>
                <div className='team__employee-profilepic-container'>
                    <div className='team__employee-profilepic'/>
                </div>
                <div className='team__employee-details-container'>                
                    <p className='team__employee-name'>Christoph Labestin</p>
                    <p className='team__employee-job-title'>Teamleiter</p>
                    <p className='team__employee-caption italic'>"iPad Allrounder und React Hero"</p>
                </div>
            </div>
        </div>
    )
}

const DesignEmployees = (props) => {
    return (
        <div className={props.class}>
            <div className='team__employee'>
                <div className='team__employee-profilepic-container'>
                    <div className='team__employee-profilepic'/>
                </div>
                <div className='team__employee-details-container'>
                    <p className='team__employee-name'>Alexander Diermeyer</p>
                    <p className='team__employee-job-title'>Teamleiter</p>
                    <p className='team__employee-caption italic'>"Whiteboard Beschmierer und Photoshop Crack"</p>
                </div>
            </div>
            <div className='team__employee'>
                <div className='team__employee-profilepic-container'>
                    <div className='team__employee-profilepic'/>
                </div>
                <div className='team__employee-details-container'>
                    <p className='team__employee-name'>Lea Labestin</p>
                    <p className='team__employee-job-title'>Designer</p>
                    <p className='team__employee-caption italic'>"Back End Beschwörer und NAS Liebhaber"</p>
                </div>
            </div>
        </div>
    )
}

const DevelopmetEmployees = (props) => {
    return (
        <div className={props.class}>
            <div className='team__employee'>
                <div className='team__employee-profilepic-container'>
                    <div className='team__employee-profilepic'/>
                </div>
                <div className='team__employee-details-container'>
                    <p className='team__employee-name'>Sascha Frank</p>
                    <p className='team__employee-job-title'>Teamleiter</p>
                    <p className='team__employee-caption italic'>"Back End Beschwörer und NAS Liebhaber"</p>
                </div>
            </div>
            <div className='team__employee'>
                <div className='team__employee-profilepic-container'>
                    <div className='team__employee-profilepic'/>
                </div>
                <div className='team__employee-details-container'>
                    <p className='team__employee-name'>Enrico Carruba</p>
                    <p className='team__employee-job-title'>Front-End</p>
                    <p className='team__employee-caption italic'>"Whiteboard Beschmierer und Photoshop Crack"</p>
                </div>
            </div>
        </div>
    )
}