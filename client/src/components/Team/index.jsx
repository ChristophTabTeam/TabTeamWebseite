import React, { useState } from 'react'
import '../../styles/Team.scss'
import { GeneralEmployees, DesignEmployees, DevelopmetEmployees, MarketingEmployees } from './Teams'

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
                            wir freuen uns sehr auf die Zusammenarbeit mit dir. <br/>
                            Wir wollen, dass du dich zuhause fühlst, sei ein Teil von uns. 
                            Zusammen mit dir wird es dein Projekt.
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
                        <div className='team__choose-team-group left'>
                            <div className={(activeTeam === 'general') ? 'team__choose-team-name active' : 'team__choose-team-name'} onClick={() => {
                                setActiveTeam('general')
                            }}>Gründer</div>
                            <div className={(activeTeam === 'marketing') ? 'team__choose-team-name active' : 'team__choose-team-name'} onClick={() => {
                                setActiveTeam('marketing')
                            }}>Marketing</div>
                        </div>
                        <div className='team__choose-team-group right'>
                            <div className={(activeTeam === 'development') ? 'team__choose-team-name active' : 'team__choose-team-name'} onClick={() => {
                                setActiveTeam('development')
                            }}>Solutions</div>
                            <div className={(activeTeam === 'design') ? 'team__choose-team-name active' : 'team__choose-team-name'} onClick={() => {
                                setActiveTeam('design')
                            }}>Creative</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Team