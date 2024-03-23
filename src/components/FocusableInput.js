import React from 'react';
// import { createRoot } from 'react-dom/client';
export const FocusableInputBasic = (props)  => {
    const inputRef = React.useRef();
    
    React.useEffect(()=> {
      if(props.shouldFocus){
        inputRef.current.focus()
      }
    }, [props.shouldFocus])
    
    return <input ref={inputRef} />;
  };

  // document.body.innerHTML = "<div id='root1'></div>";
  // const root = createRoot(document.getElementById("root1"));
  // root.render(<FocusableInput shouldFocus={true} />,);