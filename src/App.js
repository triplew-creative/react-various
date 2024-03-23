
import React from 'react';
import './App.css';
import CharacterAttributes from './components/CharacterAttributes';
import FocusableInput from './components/FocusableInput';
import GroceryApp from './components/GroceryApp';
import ImageGallery from './components/ImageGallery';
import Message from './components/Message';
import Username from './components/ChangeUsername';




function App() {
  const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];
  const nameRef = React.useRef();
  const userNameRef = React.useRef();
  function clickHandler() {
    userNameRef.current.setState({ value: nameRef.current.value });
 }
//  setTimeout(() => {
//   document.querySelector("input").value = "John Doe";
//   document.querySelector("button").click();
// }, 300);

  return (
    <>
      <div className="App">
        <div className='components'>
          <div>
            <CharacterAttributes totalPoints={15} />
          </div>
          <div>
            <FocusableInput shouldFocus={true} />,
          </div>
          <div>
            <GroceryApp
              products={[
                { name: "Oranges", votes: 0 },
                { name: "Bananas", votes: 0 }
              ]}
            />
          </div>
          <div>
            <ImageGallery links={links} />
          </div>
          <div>
            <Message />
          </div>
          <div>
          <div>
            <button onClick={clickHandler}>Change Username</button>
            <input type="text" ref={nameRef} />
            <Username ref={userNameRef} />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
