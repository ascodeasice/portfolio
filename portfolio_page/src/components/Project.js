import Github from '../assets/icon/github.svg';
import Placeholder from '../assets/photo/star.jpg';

function Project({ src, name, description, githubLink, liveLink }) {
  return (
    <div className="project">
      <img className='projectPicture' src={src || Placeholder} alt={name} />
      <div className="projectNameWrapper">
        <h2 className='projectName'>{name}</h2>
        <a href={githubLink}>
          <img className='icon' src={Github} alt={`github link to ${name}`} />
        </a>
        <a className='liveLink' href={liveLink}>Live Preview</a>
      </div>
      <p className='description grey paddingLeft'>{description}</p>
    </div>
  );
}

export default Project;