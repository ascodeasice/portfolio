import { useEffect } from 'react';

function Contact({ scrollTrigger }) {
  useEffect(() => {
    scrollTrigger('.contact', 'changeColor');
  }, []);

  return (
    <div className="contact">

    </div>
  );
}

export default Contact;