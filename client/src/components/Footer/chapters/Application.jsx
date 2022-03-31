import React from 'react'
import '../../../styles/Footer-Chapters.scss'

function Application() {
  return (
    <div className='footer__application'>
        <form className='footer__app-form' method='POST' action='application'>
            <label className='footer__app-input-label app_one' for='firstName'>
              <input type='text' name='firstName' className='footer__app-input' placeholder='Vorname' required/>
              <span className='footer__app-input-name'></span>
            </label>
            <label className='footer__app-input-label app_two' for='firstName'>
              <input type='text' name='lastName' className='footer__app-input' placeholder='Nachname' required/>
              <span className='footer__app-input-name'></span>
            </label>
            <label className='footer__app-input-label app_three' for='firstName'>
              <input type='text' name='footerPhone' className='footer__app-input' placeholder='Telefon' required/>
              <span className='footer__app-input-name'></span>
            </label>
            <label className='footer__app-input-label app_four' for='firstName'>
              <input type='text' name='footerEmail' className='footer__app-input' placeholder='E-Mail' required/>
              <span className='footer__app-input-name'></span>
            </label>
            <select className='footer__app-select app_five' name='footerAppSelect' id='footerAppSelect'>
              <option>Mediengestalter (m/w/d)</option>
              <option>Front End Developer (m/w/d)</option>
            </select>
            <label className='footer__app-input-label app_six' for='cv'>
              <span className='footer__app-input-name'>Anschreiben anhängen</span>
              <input type='file' name='footerCv' className='footer__app-input-file app-cv'/>
            </label>
            <label className='footer__app-input-label app_seven' for='cv'>
              <span className='footer__app-input-name'>Lebenslauf</span>
              <input type='file' title=' ' name='footerLetterOfApplication' className='footer__app-input-file app-letter'/>
            </label>
            <label className='footer__app-input-label app_eight' for='cv'>
              <span className='footer__app-input-name'>Weitere Anhänge</span>
              <input type='file' name='moreFiles' className='footer__app-input-file app-more-files'/>
            </label>
            <button type='submit' className='footer__app-submit-button app_nine'>Bewerbung abschicken</button>
        </form>
    </div>
  )
}

export default Application