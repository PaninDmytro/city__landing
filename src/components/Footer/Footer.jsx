import './Footer.scss';
import logo from '../../pictures/logo.png';
import { useState } from 'react';
import cn from 'classnames';

export const Footer = () => {
  const [valid, setValid] = useState(true);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setError('');

    const { value } = event.target;
    setEmail(value);

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    setValid(isValid);
  }

  const handleError = () => {
    if (!valid) {
      setError('Incorrect email type');
    }
  }

  return (
    <footer className='footer'>
      <section className='contact__info'>
        <div className="contact__wrapper">
          <div className="contacts__container">
            <h2 className='contact__us'>Contact us!</h2>

            <p className='support__staff'>
              The support staff and customer
              service are available to help you with any questions
              or needs you might have. Just drop us a line.
            </p>

            <p className='site__owner'>This site is owned and operated by Kode Tech Solutions LTD</p>

            <div className='contact__information'>
              <div className='contact__information__container'>
                <p className='how__contact'>Phone:</p>
                <p className='company__contact'>442038857261</p>

                <p className='how__contact'>Email:</p>
                <p className='company__contact'>help@google.com</p>

                <p className='how__contact'>Address:</p>
                <p className='company__contact'>
                  Trust Company Complex, Ajeltake Road, Ajeltake Island,
                  Majuro, Republic of the Marshall Islands, MH 96960
                </p>
              </div>
            </div>
          </div>

          <form className='form'>
            <input
              type="text"
              placeholder='Name'
              name='name'
              className='input__item first__input'
              onChange={event => setName(event.target.value)}
              required
            />

            <div className="email__container">
              <input
                type="text"
                placeholder='Email'
                name='email'
                className={cn('input__item', {
                  'wrong__email': error,
                  'rigth__email': valid && email,
                })}
                onChange={handleChange}
                required
              />

              <p className={cn("error", {
                'visible__error': error,
              })}>
                {error}
              </p>
            </div>

            <textarea type="text" placeholder='Message' name='message' className='message' />

            <button
              type='button'
              className='send'
              disabled={!name || !email}
              onClick={handleError}
            >
              Send
            </button>
          </form>
        </div>
      </section>

      <section className='details__info'>
        <div className="details__wrapper">
          <div className='details__container'>
            <img src={logo} alt='logo' className='footer__logo' />

            <ul className='options'>
              <li className='option'><a href='#' className='option__link'>About us</a></li>
              <li className='option'><a href='#' className='option__link'>Instructions</a></li>
              <li className='option'><a href='#' className='option__link'>Platforms</a></li>
              <li className='option'><a href='#' className='option__link'>Contact Us</a></li>
              <li className='option'><a href='#' className='option__link'>Sign in</a></li>
              <li className='option'><a href='#' className='option__link'>Sign up for free</a></li>
            </ul>

            <div className='advice'>
              <h3 className='advice__title'>Information and high risk warning:</h3>

              <p className='advice__text'>
                Trading with foreign exchange (FX), contract for
                differences (CFDs) and precious metals carries a
                high level of risk that may not be suitable for
                all investors. Leverage creates additional risk
                and loss exposure. Before you decide to trade
                foreign exchange or contract for differences,
                carefully consider your investment objectives,
                experience level, and risk tolerance.
              </p>
            </div>

            <div className='advice advice--margin'>
              <h3 className='advice__title'>Legal disclaimer:</h3>

              <p className='advice__text'>
                Forex trading entails significant risks and is not
                appropriate for all investors. The possibility of
                incurring substantial losses should be taken into
                account. It is therefore important to understand the
                possible consequences of investing. Traders should
                weigh their earning potential against the risks involved
                and act accordingly. Interactive Trade Ltd operating under
                brand and using domenLink domain within the European
                Economic Area.
              </p>
            </div>
          </div>

          <div className='documents'>
            <p className='document'><a href='#' className='document__link'>Copyright 2020, All Right Reserved</a></p>
            <p className='document'><a href='#' className='document__link'>Terms and Conditions</a></p>
            <p className='document'><a href='#' className='document__link'>Privacy Policy</a></p>
            <p className='document'><a href='#' className='document__link'>Risk Warnings</a></p>
            <p className='document'><a href='#' className='document__link'>Anti-Money Laundering</a></p>
          </div>
        </div>
      </section>
    </footer>
  )
}