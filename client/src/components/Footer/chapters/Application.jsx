import React from 'react'
import '../../../styles/Footer-Chapters.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'

function Application() {
  return (
    <div className='footer__application'>
        <form className='footer__app-form' method='POST' action='application'>
            <div className='footer__app-form-grid'>
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
                <option>Initiativbewerbung</option>
                <option>Mediengestalter (m/w/d)</option>
                <option>Front End Developer (m/w/d)</option>
              </select>
            </div>
            <div className='footer__app-files-container'>
              <label className='footer__app-input-label footer__app-file' for='cv'>
                <div className='footer__app-file-name'>
                  <span className='footer__app-input-name'>Anschreiben</span>
                  <input type='file' name='footerCv' className='footer__app-input-file app-cv'/>
                </div>
                <span className='footer__app-file-icon'>
                  <FontAwesomeIcon icon={faArrowUpFromBracket} className='file-icon'/>
                </span>
              </label>
              <label className='footer__app-input-label footer__app-file' for='cv'>
                <div className='footer__app-file-name'>
                  <span className='footer__app-input-name'>Lebenslauf</span>
                  <input type='file' title=' ' name='footerLetterOfApplication' className='footer__app-input-file app-letter'/>
                </div>
                <span className='footer__app-file-icon'>
                  <FontAwesomeIcon icon={faArrowUpFromBracket} className='file-icon'/>
                </span>
              </label>
              <label className='footer__app-input-label footer__app-file' for='cv'>
                <div className='footer__app-file-name'>
                  <span className='footer__app-input-name'>Weitere Anhänge</span>
                  <input type='file' name='moreFiles' className='footer__app-input-file app-more-files'/>
                </div>
                <span className='footer__app-file-icon'>
                  <FontAwesomeIcon icon={faArrowUpFromBracket} className='file-icon'/>
                </span>
              </label>
            </div>
            <button type='submit' className='footer__app-submit-button'>Bewerbung abschicken</button>
        </form>
    </div>
  )
}

export default Application