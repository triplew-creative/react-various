import React from 'react';
// import { createRoot } from 'react-dom/client';
export default class ChangeUsername extends React.Component {
    state = { value: "" };
  
    changeValue(value) {
      this.setState({ value });
    }
  
    render() {
      const { value } = this.state;
      return <h1>{value}</h1>;
    }
  }
  
//   function App() {
//     const nameRef = React.useRef();
//     const userNameRef = React.useRef();
    
//     function clickHandler() {
//        userNameRef.current.setState({ value: nameRef.current.value });
//     }
  
//     return (
//       <div>
//         <button onClick={clickHandler}>Change Username</button>
//         <input type="text" ref={nameRef} />
//         <Username ref={userNameRef} />
//       </div>
//     );
//   }
  
//   document.body.innerHTML = "<div id='root5'></div>";
//   const root = createRoot(document.getElementById("root"));
//   root.render(<App />);
  
//   setTimeout(() => {
//     document.querySelector("input").value = "John Doe";
//     document.querySelector("button").click();
  
//     setTimeout(() => {
//       console.log(document.getElementById("root5").innerHTML);
//     }, 300);
//   }, 300);