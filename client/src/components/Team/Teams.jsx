import React from 'react'

function Teams() {
  return (
    <div>Teams</div>
  )
}

export default Teams

export const GeneralEmployees = (props) => {
    return (
        <div className={props.class}>
            <div className='team__employee'>
                <div className='team__employee-profilepic-container'>
                    <div className='team__employee-profilepic'/>
                </div>
                <div className='team__employee-details-container'>                
                    <p className='team__employee-name'>Christoph Labestin</p>
                    <div className='team__employee-title-and-caption'>
                        <p className='team__employee-job-title'>Geschäftsführer</p>
                        <p className='team__employee-caption italic'>"iPad Allrounder und React Hero"</p>
                    </div>
                </div>
            </div>
            <div className='team__employee'>
                <div className='team__employee-profilepic-container'>
                    <div className='team__employee-profilepic'/>
                </div>
                <div className='team__employee-details-container'>
                    <p className='team__employee-name'>Alexander Diermeyer</p>
                    <div className='team__employee-title-and-caption'>
                        <p className='team__employee-job-title'>Creative</p>
                        <p className='team__employee-caption italic'>"Whiteboard Beschmierer und Photoshop Crack"</p>
                    </div>
                </div>
            </div>
            <div className='team__employee'>
                <div className='team__employee-profilepic-container'>
                    <div className='team__employee-profilepic'/>
                </div>
                <div className='team__employee-details-container'>
                    <p className='team__employee-name'>Sascha Frank</p>
                    <div className='team__employee-title-and-caption'>
                        <p className='team__employee-job-title'>IT Consultant</p>
                        <p className='team__employee-caption italic'>"Back End Beschwörer und NAS Liebhaber"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const MarketingEmployees = (props) => {
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
            <div className='team__employee'>
                <div className='team__employee-profilepic-container'>
                    <div className='team__employee-profilepic'/>
                </div>
                <div className='team__employee-details-container'>                
                    <p className='team__employee-name'>Mikail Delier</p>
                    <p className='team__employee-job-title'>Social Media</p>
                    <p className='team__employee-caption italic'>"iPad Allrounder und React Hero"</p>
                </div>
            </div>
        </div>
    )
}

export const DesignEmployees = (props) => {
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
            <div className='team__employee'>
                <div className='team__employee-profilepic-container'>
                    <div className='team__employee-profilepic'/>
                </div>
                <div className='team__employee-details-container'>                
                    <p className='team__employee-name'>Bryan Conrad</p>
                    <p className='team__employee-job-title'>VFX Designer</p>
                    <p className='team__employee-caption italic'>"iPad Allrounder und React Hero"</p>
                </div>
            </div>
        </div>
    )
}

export const DevelopmetEmployees = (props) => {
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
                    <p className='team__employee-name'>Christoph Labestin</p>
                    <p className='team__employee-job-title'>Front-End Dev</p>
                    <p className='team__employee-caption italic'>"iPad Allrounder und React Hero"</p>
                </div>
            </div>
        </div>
    )
}