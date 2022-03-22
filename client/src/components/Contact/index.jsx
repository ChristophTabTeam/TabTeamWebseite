import React, { useState, useRef, useEffect } from 'react'
import '../../styles/Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'

function Contact() {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [subject, setSubject] = useState(null)
    const [message, setMessage] = useState(null)
    const formData = ({
        name: name,
        email: email,
        subject: subject,
        message: message
    })
    const [sent, setSent] = useState(false)
    const nameRef = useRef()
    const emailRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()

    const clearForm = () => {
        nameRef.current.value = null
        emailRef.current.value = null
        subjectRef.current.value = null
        messageRef.current.value = null
    }

    useEffect(() => {
        const timer = setTimeout(() => clearForm, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [sent])

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
                    {formData.name}
                    {formData.email}
                    {formData.subject}
                    {formData.message}
                </div>
            </div>
            <div className='contact__second'>
                <div className='contact__iphone'>
                        <form method="POST" onSubmit={() => {
                            setSent(true)
                        }} action="" className='contact__form'>
                            <div className='contact__iphone-notch'>
                                <div className='contact__iphone-notch-sensor'/>
                                <div className='contact__iphone-notch-speaker'/>
                                <div className='contact__iphone-notch-camera'/>
                            </div>
                            <label className='contact__form-input-label'>
                                <input type="text" name="name" placeholder='Name' ref={nameRef} onChange={() => {
                                    setName(nameRef.current.value)
                                }} className='contact__form-item contact__input '/>
                                <span className='contact__form-input-icon'></span>
                            </label>
                            <label className='contact__form-input-label'>
                                <input type="email" name="email" placeholder='E-Mail' ref={emailRef} onChange={() => {
                                    setEmail(emailRef.current.value)
                                }} className='contact__form-item contact__input'/>
                                <span className='contact__form-input-icon'></span>
                            </label>
                            <label className='contact__form-input-label'>
                                <input type="text" name="subject" placeholder='Betreff' ref={subjectRef} onChange={() => {
                                    setSubject(subjectRef.current.value)
                                }} className='contact__form-item contact__input'/>
                                <span className='contact__form-input-icon'></span>
                            </label>
                            <label>
                                <textarea name="message" placeholder='Schicke den Papierflieger auf die Reise...' ref={messageRef} onChange={() => {
                                    setMessage(messageRef.current.value)
                                }} className='contact__form-item contact__textarea'/>
                            </label>
                            <button type='submit' className='contact__submit-button'><FontAwesomeIcon icon={faPaperPlane} className='contact__icon'/></button>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Contact