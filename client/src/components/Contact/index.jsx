import React, { useState, useRef } from 'react'
import '../../styles/Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

function Contact() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [subject, setSubject] = useState()
    const [message, setMessage] = useState()
    const [sent, setSent] = useState(false)
    const nameRef = useRef()
    const emailRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()

    function submitForm() {
        var nameContent = nameRef.current.value
        var emailContent = emailRef.current.value
        var subjectContent = subjectRef.current.value
        var messageContent = messageRef.current.value
        setName(nameContent)
        setEmail(emailContent)
        setSubject(subjectContent)
        setMessage(messageContent)
        nameRef.current.value = null
        emailRef.current.value = null
        subjectRef.current.value = null
        messageRef.current.value = null
    }

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
                    {name}
                    {email}
                    {subject}
                    {message}
                </div>
            </div>
            <div className='contact__second'>
                <div className='contact__iphone'>
                        <form onSubmit={submitForm} className='contact__form'>
                            <div className='contact__iphone-notch'>
                                <div className='contact__iphone-notch-sensor'/>
                                <div className='contact__iphone-notch-speaker'/>
                                <div className='contact__iphone-notch-camera'/>
                            </div>
                            <label className='contact__form-input-label'>
                                <input type="text" name='name' placeholder='Name' ref={nameRef} className='contact__form-item contact__input '/>
                                <span className='contact__form-input-icon'></span>
                            </label>
                            <label className='contact__form-input-label'>
                                <input type="email" name='email' placeholder='E-Mail' ref={emailRef} className='contact__form-item contact__input'/>
                                <span className='contact__form-input-icon'></span>
                            </label>
                            <label className='contact__form-input-label'>
                                <input type="text" name='subject' placeholder='Betreff' ref={subjectRef} className='contact__form-item contact__input'/>
                                <span className='contact__form-input-icon'></span>
                            </label>
                            <label>
                                <textarea name='message' placeholder='Schicke den Papierflieger auf die Reise...' ref={messageRef} className='contact__form-item contact__textarea'/>
                            </label>
                            <button type='submit' className='contact__submit-button'><FontAwesomeIcon icon={faPaperPlane} className='contact__icon'/></button>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Contact