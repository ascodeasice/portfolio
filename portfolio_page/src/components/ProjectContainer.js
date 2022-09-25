import Project from "./Project";
import InstagramClone from '../assets/photo/instagramClone.png';
import Waldo from '../assets/photo/waldo.png';

function ProjectContainer() {
  const projects = [
    {
      name: 'Instagram Clone',
      description: 'A clone of Instagram App, you can post, like, comment and follow others on it.\n\n Made with React.js and Firebase.',
      liveLink: 'https://instagram-clone-9075e.firebaseapp.com/',
      githubLink: 'https://github.com/ascodeasice/insta-clone',
      src: InstagramClone
    },
    {
      name: 'Where is Waldo',
      description: 'A website that allows user to play where is waldo, and see their scores on leaderboard.\nIt also has other themes such as Minecraft, Lego and so on.\n\n Made with React.js and Firebase.',
      liveLink: 'https://where-is-waldo-and-more.web.app/',
      githubLink: 'https://github.com/ascodeasice/where-is-waldo',
      src: Waldo
    }
  ]

  return (
    <>
      <h1 className='title paddingLeft'>My Projects</h1>
      <div className="projectContainer">
        {
          projects.map((project) => <Project name={project.name} description={project.description} githubLink={project.githubLink} liveLink={project.liveLink} src={project.src} />)
        }
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </>
  )
}

export default ProjectContainer;