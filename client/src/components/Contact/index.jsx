import React from 'react'
import '../../styles/Contact.scss'
import SendIcon from '@mui/icons-material/Send';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import TitleOutlinedIcon from '@mui/icons-material/TitleOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

function Contact() {
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
                        <form action='http://95.216.199.125:3000/contact' method='POST' className='contact__form'>
                            <div className='contact__iphone-notch'>
                                <div className='contact__iphone-notch-sensor'/>
                                <div className='contact__iphone-notch-speaker'/>
                                <div className='contact__iphone-notch-camera'/>
                            </div>
                            <label className='contact__form-input-label'>
                                <input type="text" name='name' placeholder='Name' className='contact__form-item contact__input '/>
                                <span className='contact__form-input-icon'><PersonIconSizing/></span>
                            </label>
                            <label className='contact__form-input-label'>
                                <input type="email" name='email' placeholder='E-Mail' className='contact__form-item contact__input'/>
                                <span className='contact__form-input-icon'><MailIconSizing/></span>
                            </label>
                            <label className='contact__form-input-label'>
                                <input type="text" name='subject' placeholder='Betreff' className='contact__form-item contact__input'/>
                                <span className='contact__form-input-icon'><TitleIconSizing/></span>
                            </label>
                            <label>
                                <textarea name='message' placeholder='Schicke den Papierflieger auf die Reise...' className='contact__form-item contact__textarea'/>
                            </label>
                            <button type='submit' className='contact__submit-button'><FontAwesomeIcon icon={faPaperPlane} className='contact__icon'/></button>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

function PersonIconSizing() {
    const width = window.innerWidth
    if (width < 300) {
        return <PersonOutlineOutlinedIcon sx={{ fontSize: 20}}/>
    } else if (width < 500) {
        return <PersonOutlineOutlinedIcon sx={{ fontSize: 20}}/>
    } else if (width < 900) {
        return <PersonOutlineOutlinedIcon sx={{ fontSize: 30}}/>
    } else {
        return <PersonOutlineOutlinedIcon sx={{ fontSize: 40}}/>
    }
}

function MailIconSizing() {
    const width = window.innerWidth
    if (width < 300) {
        return <MailOutlineOutlinedIcon sx={{ fontSize: 20}}/>
    } else if (width < 500) {
        return <MailOutlineOutlinedIcon sx={{ fontSize: 20}}/>
    } else if (width < 900) {
        return <MailOutlineOutlinedIcon sx={{ fontSize: 30}}/>
    } else {
        return <MailOutlineOutlinedIcon sx={{ fontSize: 40}}/>
    }
}

function TitleIconSizing() {
    const width = window.innerWidth
    if (width < 300) {
        return <TitleOutlinedIcon sx={{ fontSize: 20}}/>
    } else if (width < 500) {
        return <TitleOutlinedIcon sx={{ fontSize: 20}}/>
    } else if (width < 900) {
        return <TitleOutlinedIcon sx={{ fontSize: 30}}/>
    } else {
        return <TitleOutlinedIcon sx={{ fontSize: 40}}/>
    }
}

function SendIconSizing() {
    const width = window.innerWidth
    if (width < 300) {
        return <SendOutlinedIcon sx={{ fontSize: 20}}/>
    } else if (width < 500) {
        return <SendOutlinedIcon sx={{ fontSize: 30}}/>
    } else if (width < 900) {
        return <SendOutlinedIcon sx={{ fontSize: 40}}/>
    } else {
        return <SendOutlinedIcon sx={{ fontSize: 50}}/>
    }
}