import Github from '../assets/icon/github.svg';
import Star from '../assets/photo/star.jpg';

function Introduction() {
  return (
    <header className='introduction'>
      <div className='profilePicture'>
        <h1 className='name white'>Leo Wang</h1>
      </div>
      <div className='descriptionContainer'>
        <h1 className='title'>About me</h1>
        <p className='description grey'>I'm Leo, a CS student in college. I'm still learning full-stack JavaScript on <a href='https://www.theodinproject.com/'>The Odin Project</a> website. Already having decent knowledge about frontend, I plan to learn about NodeJS, MongoDB and other backend technologies in the future.</p>
        <p className='description grey'>(I might use my own photo someday)</p>
        <div className='iconBar'>
          <a href="https://github.com/ascodeasice">
            <img className='icon' src={Github} alt='my github page' />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Introduction;