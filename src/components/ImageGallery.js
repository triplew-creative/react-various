import React from 'react';
// import { createRoot } from 'react-dom/client';

export default function ImageGallery({ links }) {
  const remove = (event) => {
    event.target.parentElement.remove();
  }

  return (
    <div>
      {links.map((link, index) => <div key={index} className="image">
        <img src={link} alt={link} />
        <button className="remove" onClick={event => remove(event)}>X</button>
      </div>
      )}
    </div>
  );
}

// document.body.innerHTML = "<div id='root7'> </div>";

// const rootElement = document.getElementById("root7");
// const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];
// const root = createRoot(rootElement);
// root.render(<ImageGallery links={links} />);

