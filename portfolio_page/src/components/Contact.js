import { useEffect } from 'react';
import Star from '../assets/photo/star.jpg';
import Mail from '../assets/icon/mail.svg';
import Github from '../assets/icon/github.svg';

function Contact({ scrollTrigger }) {
  useEffect(() => {
    scrollTrigger('.contact', 'changeOpacity');
  }, []);

  return (
    <div className="contact">
      <div className='contactWrapper'>
        <h1 className='title white'>Contact Me</h1>
        <p className='description white'>I'm not looking for a job now, but feel free to give me feedback or send an email to me.</p>
        <a href='mailto:ascodeasice@gmail.com' className='emailWrapper'>
          <img src={Mail} className='icon' alt='' />
          <p className='description white'>ascodeasice@gmail.com</p>
        </a>
        <a href="https://github.com/ascodeasice">
          <img className='icon' src={Github} alt='my github page' />
        </a>
      </div>
      <img className='contactPicture white' alt='' src={Star} />
    </div>
  );
}

export default Contact;