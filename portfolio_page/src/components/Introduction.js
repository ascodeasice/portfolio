import Github from '../assets/icon/github.svg';

function Introduction() {
  return (
    <header className='introduction'>
      <div className='profilePicture'>
        <h1 className='name white'>Leo Wang</h1>
      </div>
      <div className='descriptionContainer'>
        <h1 className='title'>About me</h1>
        <p className='description grey'>I'm Leo, a CS student in college(NCKU). I'm still learning full-stack JavaScript on The Odin Project website. Already having decent knowledge about frontend, I plan to learn about NodeJS, MongoDB and other backend technologies in the future.</p>
        <div className='iconBar'>
          <a href="https://github.com/ascodeasice">
            <img className='icon' src={Github} alt='github icon' />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Introduction;