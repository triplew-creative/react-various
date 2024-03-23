
import GroceryApp from '../components/GroceryApp'

function Groceries() {
    setTimeout(() => {
        let plusButton = document.querySelector("ul > li > button");
        if(plusButton) {
          plusButton.click();
        }
        // setTimeout(() => {
        //   console.log(document.getElementById('root').outerHTML);
        // });
      });

    return (             
        <GroceryApp
            products={[
            { name: "Oranges", votes: 0 },
            { name: "Bananas", votes: 0 }
            ]}
        />
    );
  }
  
  export default Groceries;
  