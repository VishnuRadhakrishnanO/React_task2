import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cardcomp from './cardcomp';
import { useState } from 'react';

function App() {
  let productdetails = [
    {
      id: 1,
      name: "Item 1",
      price: 24.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      productrating: 3
    },
    {
      id: 2,
      name: "Item 2",
      price: 24.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      productrating: 4
    },
    {
      id: 3,
      name: "Item 3",
      price: 24.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      productrating: 5
    },
    {
      id: 4,
      name: "Item 4",
      price: 24.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      productrating: 3
    },
    {
      id: 5,
      name: "Item 5",
      price: 24.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      productrating: 3
    },
    {
      id: 6,
      name: "Item 6",
      price: 24.99,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      productrating: 3
    },

  ]
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  

  let addCart = (product) => {

console.log(cart)
console.log(product.name)
const value = cart.find(elem => elem.name === product.name)
console.log(value)
if(value ==undefined)
{setCart([...cart, product])
    alert(product.name + " is added")
    setTotal(total + product.price)}
    else{
      alert(product.name + " is already added")
    }
    
  }
 
  let RemoveCart =(item)=>{
    
  setCart(cart.filter(obj=>obj.id !== item.id))
  setTotal(total - item.price)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h1 class="my-4">Shop Name</h1>
            <div class="list-group">

              {
                cart.map((item) => {
                  return <div class="list-group-item" href="#!">{item.name}<span> </span>
                 
                  <button className="btn btn-sm btn-danger" onClick={()=>{RemoveCart(item)}}>Remove</button>
                  
                  </div>
                })
              }
              <h3 class="list-group-item">Total ={total}</h3>
            </div>
          </div>
          <div className="col-lg-9">
            <div class="row">
              {
                productdetails.map((pd) => {
                 
                  return <Cardcomp productdata={pd} handleCart={addCart}></Cardcomp>
                  
                })
              }

            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default App;
