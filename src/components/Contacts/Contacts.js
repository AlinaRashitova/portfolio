import React from 'react'
import './Contacts.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import maillogo from '../../images/mail.svg'
import telegramlogo from '../../images/telegram.svg'
import ghlogo from '../../images/githubSmall.svg'
import linkedinlogo from '../../images/linkedin.svg'

const Contacts = () => {
  return (
    <section className="contacts" id="contacts">
      <SectionTitle title="Contacts" />
      <div className="contacts__container">
        <div className="contacts__info">
          <p className="contacts__info_text">Contact me:</p>
          <ul className="contacts__info_list">
            <li className="contacts__info_list_item">
              <img src={maillogo} alt="MailLogo" className="contacts__info_list_logo" />
              <a
                className="contacts__info_list_link"
                href="mailto:alinarashitova01@gmail.com"
                target="_blank"
                rel="noreferrer">
                alinarashitova01@gmail.com
              </a>
            </li>
            <li className="contacts__info_list_item">
              <img src={telegramlogo} alt="TelegramLogo" className="contacts__info_list_logo" />
              <a
                className="contacts__info_list_link"
                href="https://t.me/alinarashitova01"
                target="_blank"
                rel="noreferrer">
                alinarashitova01
              </a>
            </li>
          </ul>
        </div>
        <div className="contacts__info">
          <p className="contacts__info_text">Media:</p>
          <ul className="contacts__info_list_media">
            <li className="contacts__info_list_item">
              <a
                className="contacts__info_link"
                href="https://github.com/AlinaRashitova"
                target="_blank"
                rel="noreferrer">
                <img src={ghlogo} alt="GhLogo" className="contacts__info_list_logo" />
              </a>
            </li>
            <li className="contacts__info_list_item">
              <a
                className="contacts__info_link"
                href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0-%D1%80%D0%B0%D1%88%D0%B8%D1%82%D0%BE%D0%B2%D0%B0-876867271/?locale=en_US"
                target="_blank"
                rel="noreferrer">
                <img src={linkedinlogo} alt="LinkedinLogo" className="contacts__info_list_logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contacts
