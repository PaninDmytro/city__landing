import './Main.scss';
import photo from '../../pictures/photo.png';
import { useMediaQuery } from '../../utils/useMediaQuery.ts';
import { useState } from 'react';
import { questionData } from '../../utils/question.ts';
import cn from 'classnames';

export const Main = () => {
  const questionArray = questionData;
  const [openStates, setOpenStates] = useState(questionArray.map(() => false));
  const isTablet = useMediaQuery('(min-width: 744px)');
  const isDesctop = useMediaQuery('(min-width: 1260px)');

  const handleOpen = (index) => {
    const newOpenStates = [...openStates];
    newOpenStates[index] = !newOpenStates[index];
    setOpenStates(newOpenStates);
  };  

  return (
    <main className='main'>
      <section className="instruction">
        <h2 className='get__started'>Getting Started Is <span className='fast'>Fast & Easy</span></h2>

        <div className="steps">
          <div className="step step--1">
            <p className='number'>01.</p>
            <h3 className='action'>Register</h3>
            <p className='discribe'>Complete the simple registration to get your trading credentials.</p>

            {(isTablet || isDesctop) && (
              <div className='dashed__connect__rigth dashed__connect__rigth--1'></div>
            )}
          </div>


          <div className="step step--2">
            <p className='number'>02.</p>
            <h3 className='action'>Verification</h3>
            <p className='discribe'>Big Invest is required to verify your identity, upload your documents quickly and get approved in minutes.</p>

            {(isTablet || isDesctop) && (
              <div className='dashed__connect__left dashed__connect__left--1'></div>
            )}
          </div>


          <div className="step">
            <p className='number'>03.</p>
            <h3 className='action'>Deposit funds</h3>
            <p className='discribe'>Big Invest accepts credit cards and bank wires. Just use the secure deposit form and follow the steps.</p>

            {(isTablet || isDesctop) && (
              <div className='dashed__connect__rigth dashed__connect__rigth--2'></div>
            )}
          </div>


          <div className="step step--4">
            <p className='number'>04.</p>
            <h3 className='action'>Start Trading</h3>
            <p className='discribe'>Once your deposit has been credited, you can begin trading instantly. In no time you will see profits rolling into your account.</p>
          </div>
        </div>
      </section>

      <section className='story'>
        <h2 className='title title__bold'>People love Big <span className='questions__backgrond'>Invest</span></h2>

        <div className="card__container">
          <div className='card'>
            <div className='person__info'>
              <img src={photo} alt='photo' className='photo'></img>

              <div className="person">
                <p className='name'>Albert Abello</p>
                <p className='role'>Director of Growth</p>
              </div>
            </div>

            <div className='article__icon'></div>

            <article className='comment'>
              This magical product actually works! It has radically
              changed the way we build our audiences. Increasing
              new customer sales by 6x in our most mature market.
            </article>
          </div>

          <div className="slider">
            <div className="left__arrow"></div>
            <p className='slide__number'>01 / 04</p>
            <div className="rigth__arrow"></div>
          </div>
        </div>
      </section>

      <section className='questions__container'>
        <h2 className='title'>Frequently asked <span className='questions__backgrond'>questions</span></h2>

        <div className="questions">
          {questionArray.map((question, index) => (
            <div className="question question__with__details" key={index}>
              <div className="question__visible__content">
                <h3 className='question__text'>{question.quastion}</h3>
                <div
                  className={cn({
                    "question__icon": !openStates[index],
                    close: openStates[index],
                  })}
                  onClick={() => handleOpen(index)}
                ></div>
              </div>

              {(openStates[index]) && (
                <p className='question__text__details'>
                  {question.explanation}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}