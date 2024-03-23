
import {React, useRef} from 'react';
import ChangeUsername from '../components/ChangeUsername';
const Username = () => {
    const nameRef = useRef();
    const userNameRef = useRef();
    
    function clickHandler() {
       userNameRef.current.setState({ value: nameRef.current.value });
    }
  
    return (
      <div>
        <button onClick={clickHandler}>Change Username</button>
        <input type="text" ref={nameRef} />
        <ChangeUsername ref={userNameRef} />
      </div>
    );
}


export default Username;

// setTimeout(() => {
//     document.querySelector("input").value = "John Doe";
//     document.querySelector("button").click();    
//   }, 300);