import React from 'react';

const Product = props => {
    const plus = () => {
      // Call props.onVote to increase the vote count for this product
        props.onVote(1, props.index);
    }; 
    const minus = () => {
      // Call props.onVote to decrease the vote count for this product
        props.onVote(-1, props.index);
    };
    return (
      <li>
        <span>{props.product.name}</span> - <span>votes: {props.product.votes}</span>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </li>
    );
  };
  
  export default function GroceryApp (props) {
    const [products, setProducts] = React.useState(props.products);
    
    const onVote = (dir, index) => {
      const nextProducts = [...products];
      const product = products[index];
      nextProducts[index] = { ...product, votes: product.votes + dir };
      setProducts(nextProducts);
    };
    
    return (
      <ul>
        {products
          .sort((a, b) => b.votes - a.votes)
          .map((product,index) => (
            <Product key={index} product={product} index={index} onVote={onVote} />
          ))
        }
      </ul>
    );
  }
  
//   document.body.innerHTML = "<div id='root'></div>";
//   const root = createRoot(document.getElementById('root'));
//   root.render(<GroceryApp
//     products={[
//       { name: "Oranges", votes: 0 },
//       { name: "Bananas", votes: 0 }
//     ]}
//   />, document.getElementById('root'));
  
// setTimeout(() => {
//     let plusButton = document.querySelector("ul > li > button");
//     if(plusButton) {
//       plusButton.click();
//     }
//     // setTimeout(() => {
//     //   console.log(document.getElementById('root').outerHTML);
//     // });
//   });
  
