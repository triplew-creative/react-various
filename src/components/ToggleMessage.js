import React from 'react';
// import { createRoot } from 'react-dom/client';
import Button from '@mui/material/Button';
export default class ToggleMessage extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        open: false
      };
      
      this.toggle = this.toggle.bind(this);
    }
      toggle(){
        this.setState({
          open: !this.state.open
        })
     
    }
    
    
    render() {
      return (<React.Fragment>
         <Button variant="contained"  onClick={this.toggle}> Want to buy a new car?</Button>
          {this.state.open && <p>Call 1800 PAYTHERENT!</p>}
          </React.Fragment>);
    }
  }
  
//   document.body.innerHTML = "<div id='root6'> </div>";
    
//   const rootElement = createRoot(document.getElementById("root6"));
//   rootElement.render(<Message />, rootElement);
  
//   console.log("Before click: " + rootElement.innerHTML);
//   document.querySelector("a").click();
//   console.log("After click: " + rootElement.innerHTML);