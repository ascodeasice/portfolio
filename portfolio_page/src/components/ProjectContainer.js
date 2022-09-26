import Project from "./Project";
import InstagramClone from '../assets/photo/instagramClone.png';
import Waldo from '../assets/photo/waldo.png';
import IKEA from '../assets/photo/ikea.png';
import MemoryCard from '../assets/photo/memoryCard.png';
import BattleShip from '../assets/photo/battleship.png';
import Todo from '../assets/photo/todo.png';
import { useEffect } from 'react';

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
    },
    {
      name: 'Fake IKEA',
      description: 'A e-commerce website that imitates IKEA shopping website, allowing user to buy things.\n\nMade with React and React Router.',
      liveLink: 'https://ascodeasice.github.io/shopping-cart/store',
      githubLink: 'https://github.com/ascodeasice/shopping-cart',
      src: IKEA
    },
    {
      name: 'Memory Card',
      description: 'A memory card game where you must remember what you clicked, and click other cards after they shuffle.\n\n Made with React',
      liveLink: 'https://ascodeasice.github.io/memory-card/',
      githubLink: 'https://github.com/ascodeasice/memory-card',
      src: MemoryCard
    },
    {
      name: 'Battleship',
      description: 'he classic game \'Battleship\', made with TDD in JavaScript.\nYou have to find where the opponent\'s ship is, and sunken them.\n\nMade with Jest, Webpack, ESLint and Babel.',
      liveLink: 'https://github.com/ascodeasice/battleship',
      githubLink: 'https://github.com/ascodeasice/battleship',
      src: BattleShip
    },
    {
      name: 'To-do list',
      description: 'A to-do list app that imitages visual design of Todoist app , the user can add/edit projects and tasks.\n\nThe user can also login with google, and save their edits.\n\nMade with Webpack and Firebase.',
      liveLink: 'https://todo-list-6452b.web.app/',
      githubLink: 'https://github.com/ascodeasice/todo-list',
      src: Todo
    }
  ];

  function scrollTrigger(selector) {
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
      addObserver(el)
    })
  }
  function addObserver(el) {
    // We are creating a new IntersectionObserver instance
    let observer = new IntersectionObserver((entries, observer) => { // This takes a callback function that receives two arguments: the elements list and the observer instance.
      entries.forEach(entry => {
        // `entry.isIntersecting` will be true if the element is visible
        if (entry.isIntersecting) {
          entry.target.classList.add('slideFromBottom')
          // We are removing the observer from the element after adding the active class
          observer.unobserve(entry.target)
        }
      })
    })
    // Adding the observer to the element
    observer.observe(el)
  }

  useEffect(() => {
    scrollTrigger('.project')
  }, []);

  return (
    <>
      <h1 className='title paddingLeft'>My Projects</h1>
      <div className="projectContainer">
        {
          projects.map((project) => <Project name={project.name} description={project.description}
            githubLink={project.githubLink} liveLink={project.liveLink} src={project.src} />)
        }
      </div>
    </>
  )
}

export default ProjectContainer;