import './Landing.css';
import Button from '../Button/Button'
import LogInForm from '../LogInForm/LogInForm';

const Landing = ({ checkState, handleOnClick }) => {
    return (
      <div className='welcome-container'>
        <div className='left-container'>
          <h1 className='main-text'>Hello! What would you like to buy?</h1>
          <p className='website-description'>
            The idea of changing in general is exhausting itself. So in our website we try to
            make it a comfortable step . we all know how annoying and hard it's to refurnish
            your home or maybe you're someone who's about to get married and your wife keeps
            complaining and winning about getting so this is idea of our website , in our
            website there are many options for furnisher ,so It got easier.
          </p>

          <a href='#products'>
            <Button text='Start Shopping' />
          </a>

          <span className='between-tow-component'>&emsp;</span>
          <Button text='Log In Seller' handleOnClick={handleOnClick} />
          {checkState ? <LogInForm handleOnClick={handleOnClick} /> : null}
        </div>
        <div className='right-container'>
          <img src='../assets/landing-img.png' alt='main img in the website ' />
        </div>
      </div>
    );
}
export default Landing;