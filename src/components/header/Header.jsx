import './Header.scss';
import logo from '../../pictures/logo.png';
import diagrame from '../../pictures/diagrame.png';
import { useMediaQuery } from '../../utils/useMediaQuery.ts';

export const Header = () => {
  const isTablet = useMediaQuery('(min-width: 744px)');
  const isDesctop = useMediaQuery('(min-width: 1260px)');

  return (
    <header className='header'>
      <nav className='navigation'>
        {(!isTablet || isDesctop) && (
          <div className='logo__nav'>
            <img src={logo} alt='logo' className='logo'></img>

            {isDesctop && (
              <ul className='nav'>
                <li className='nav__item'><a href='#' className='nav__link'>How it works</a></li>
                <li className='nav__item'><a href='#' className='nav__link'>About</a></li>
                <li className='nav__item'><a href='#' className='nav__link'>Instructions</a></li>
                <li className='nav__item'><a href='#' className='nav__link'>Accounts</a></li>
                <li className='nav__item'><a href='#' className='nav__link'>Platforms</a></li>
                <li className='nav__item'><a href='#' className='nav__link'>Contact</a></li>
              </ul>
            )}
          </div>
        )}

        {(isTablet || isDesctop) && (
          <div className="registration">
            {isDesctop && (
              <button type='button' className='language__button'>
                <p className='language'>EN</p>
                <div className="language__options"></div>
              </button>
            )}
            <a href='#' className='sign__in'>sign in for free</a>
          </div>
        )}

        {!isDesctop && (
          <div className="burger__menu"></div>
        )}
      </nav>

      <div className="trade__info">
        <div className="trade__wrapper">
          <div className="trade__container">
            <h1 className='trade'>Trade everywhere. Invest here!</h1>
            <p className='offer'>
              We provide only the best trading software.
              The trading terminal MetaTrader4 is the most
              popular and convenient platform for access to
              global exchanges. You can work anywhere.
            </p>

            <div className='start'>
              start trading
            </div>
          </div>

          <img src={diagrame} alt='diagrame' className='diagrame'></img>
        </div>
      </div>
    </header>
  )
}