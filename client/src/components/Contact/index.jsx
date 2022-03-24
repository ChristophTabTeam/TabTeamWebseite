import React, { useState } from 'react'
import '../../styles/Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faUser, faEnvelope, faComment } from '@fortawesome/free-regular-svg-icons'

function Contact() {
    const [sent, setSent] = useState(false)

    return (
        <div className='Contact' id='contact'>
            <div className='contact__first'>
                <div className='contact__first-background'/>
                <div className='textContainer'>
                    <h2><span className='green'>Dein Papierflieger</span> erreicht</h2>
                    <h1>uns schnell und <span className='green'>digital</span>.</h1>
                    <p>
                        Analoge Analogien ins digitale Sinnbild vermitteln. Wir freuen uns sehr über deine Nachricht.
                        Schick ihn los und vertrau uns.
                    </p>
                    <p>
                        TabTeam arbeitet <span className='green uppercase'>digital</span> und <span className='green uppercase'>zuvorkommend</span>.
                    </p>
                </div>
            </div>
            <div className='contact__second'>
                <div className='contact__iphone'>
                    <div className='contact__iphone-background'>
                        <form method="POST" onSubmit={() => {
                            setSent(true)
                        }} action="" className='contact__form'>
                            <div className='contact__iphone-notch'>
                                <div className='contact__iphone-notch-sensor'/>
                                <div className='contact__iphone-notch-speaker'/>
                                <div className='contact__iphone-notch-camera'/>
                            </div>
                            <label className='contact__form-input-label'>
                                <input type="text" name="name" placeholder='Name'className='contact__form-item contact__input '/>
                                <span className='contact__form-input-icon'><FontAwesomeIcon icon={faUser} className='contact__icon'/></span>
                            </label>
                            <label className='contact__form-input-label'>
                                <input type="email" name="email" placeholder='E-Mail' className='contact__form-item contact__input'/>
                                <span className='contact__form-input-icon'><FontAwesomeIcon icon={faEnvelope} className='contact__icon'/></span>
                            </label>
                            <label className='contact__form-input-label'>
                                <input type="text" name="subject" placeholder='Betreff' className='contact__form-item contact__input'/>
                                <span className='contact__form-input-icon'><FontAwesomeIcon icon={faComment} className='contact__icon'/></span>
                            </label>
                            <label className='contact__form-input-label'>
                                <textarea name="message" placeholder='Schicke den Papierflieger auf die Reise...' className='contact__form-item contact__textarea'/>
                            </label>
                            <button type='submit' className='contact__submit-button'><FontAwesomeIcon icon={faPaperPlane} className='contact__icon'/></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact