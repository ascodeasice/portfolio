import Introduction from "./components/Introduction";
import ProjectContainer from "./components/ProjectContainer";
import Contact from "./components/Contact";

function App() {
  // credits: https://css-tricks.com/scroll-triggered-animation-vanilla-javascript/
  function scrollTrigger(selector, className) {
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
      addObserver(el, className)
    })
  }

  function addObserver(el, className) {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // `entry.isIntersecting` will be true if the element is visible
        if (entry.isIntersecting) {
          entry.target.classList.add(className)
          // removing the observer from the element after adding the active class
          observer.unobserve(entry.target)
        }
      })
    })
    // Adding the observer to the element
    observer.observe(el)
  }


  return (
    <>
      <Introduction />
      <ProjectContainer scrollTrigger={scrollTrigger} />
      <Contact scrollTrigger={scrollTrigger} />
    </>
  );
}

export default App;
