import React from 'react'
import '../../styles/Showroom.scss'

function Showroom() {
    return (
        <div className='Showroom' id='showroom'>
            <div className='showroom__first'>
                <div className='showroom__text-container'>
                    <h2><span className='green'>Deine Idee</span> in</h2>
                    <h1>unserem <span className='green'>Showroom</span>.</h1>
                    <p>Wenn deine Idee zur Realität wird, dann startet der Workflow. Kreativität und Energie finden den Weg.
                        Zufriedenheit ist das Ziel.
                    </p>
                    <p>TabTeam arbeitet <span className='green uppercase'>energisch</span> und <span className='green uppercase'>Kreativ</span>.</p>
                </div>
            </div>
            <div className='showroom__second'>
                
            </div>
        </div>
    )
}

export default Showroom